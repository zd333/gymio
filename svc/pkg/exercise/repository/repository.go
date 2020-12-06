package repository

import (
	"context"
	"database/sql"
	"encoding/json"

	sq "github.com/Masterminds/squirrel"
	"github.com/pkg/errors"

	"github.com/zd333/gymio/svc/pkg/exercise/entities"
)

type Repository interface {
	CreateExercise(ctx context.Context, name string, propValues map[string]entities.PropertyValueUnion) error
	UpdateExercise(ctx context.Context, name string, propValues map[string]entities.PropertyValueUnion) error
	DeleteExercise(ctx context.Context, name string) error
	GetExercise(ctx context.Context, name string) (*entities.Exercise, error)

	CreateProperty(ctx context.Context, property entities.Property) error
	DeleteProperty(ctx context.Context, name string) error
	GetProperties(ctx context.Context) (props []entities.Property, err error)
}

func New(conn *sql.DB) Repository {
	sq.Case()
	r := repository{
		conn: conn,
	}

	return r
}

type repository struct {
	conn *sql.DB
}

func (r repository) CreateExercise(ctx context.Context, name string, propValues map[string]entities.PropertyValueUnion) error {
	tx, err := r.conn.BeginTx(ctx, &sql.TxOptions{})
	if err != nil {
		return errors.Wrapf(err, "begin create %q exercise transaction", name)
	}

	_, err = sq.Insert("exercise.exercise").
		Columns("name").
		Values(name).
		PlaceholderFormat(sq.Dollar).
		RunWith(tx).
		ExecContext(ctx)
	if err != nil {
		rErr := tx.Rollback()
		if rErr != nil {
			return errors.Wrapf(rErr, "rollback insert %q exercise", name)
		}

		return errors.Wrapf(err, "insert %q exercise", name)
	}

	if len(propValues) > 0 {
		err = r.addExercisePropValues(ctx, tx, name, propValues)
		if err != nil {
			rErr := tx.Rollback()
			if rErr != nil {
				return errors.Wrapf(rErr, "rollback create %q exercise transaction", name)
			}

			return errors.Wrapf(err, "add %q exercise property values", name)
		}
	}

	err = tx.Commit()
	if err != nil {
		return errors.Wrapf(err, "commit create %q exercise transaction", name)
	}

	return nil
}

func (r repository) UpdateExercise(ctx context.Context, name string, propValues map[string]entities.PropertyValueUnion) error {
	tx, err := r.conn.BeginTx(ctx, &sql.TxOptions{})
	if err != nil {
		return errors.Wrapf(err, "begin update %q exercise transaction", name)
	}

	err = r.deleteExercisePropValues(ctx, tx, name)
	if err != nil {
		rErr := tx.Rollback()
		if rErr != nil {
			return errors.Wrapf(rErr, "rollback update %q exercise transaction", name)
		}

		return errors.Wrapf(err, "delete %q exercise property values", name)
	}

	if len(propValues) > 0 {
		err = r.addExercisePropValues(ctx, tx, name, propValues)
		if err != nil {
			rErr := tx.Rollback()
			if rErr != nil {
				return errors.Wrapf(rErr, "rollback update %q exercise transaction", name)
			}

			return errors.Wrapf(err, "add %q exercise property values", name)
		}
	}

	err = tx.Commit()
	if err != nil {
		return errors.Wrapf(err, "commit update %q exercise transaction", name)
	}

	return nil
}

func (r repository) DeleteExercise(ctx context.Context, name string) error {
	_, err := sq.Update("exercise.exercise").
		Set("is_deleted", true).
		Where(sq.Eq{"name": name}).
		RunWith(r.conn).
		ExecContext(ctx)
	if err != nil {
		return errors.Wrapf(err, "mark %q exercise as deleted", name)
	}

	return nil
}

func (r repository) GetExercise(ctx context.Context, name string) (*entities.Exercise, error) {
	res := entities.Exercise{
		Name: name,
	}

	rows, err := sq.Select("name").
		From("exercise.exercise").
		Where(sq.Eq{"name": name}).
		PlaceholderFormat(sq.Dollar).
		RunWith(r.conn).
		QueryContext(ctx)
	if err != nil {
		return nil, errors.Wrapf(err, "select %q exercise query", name)
	}

	if !rows.Next() {
		// TODO: return not found error
		return nil, nil
	}

	rows, err = sq.Select("property.name", "property.type", "exercise_property_value.value_union").
		From("exercise.exercise_property_value").
		Join("exercise.exercise on exercise.name = exercise_property_value.exercise").
		Join("exercise.property on property.name = exercise_property_value.property").
		PlaceholderFormat(sq.Dollar).
		RunWith(r.conn).
		QueryContext(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "select property values query")
	}

	for rows.Next() {
		pv := entities.PropertyValue{}
		pvus := ""

		if err := rows.Scan(&pv.Property.Name, &pv.Property.Type, &pvus); err != nil {
			return nil, errors.Wrap(err, "select property values scan")
		}

		err = json.Unmarshal([]byte(pvus), &pv.Value)
		if err != nil {
			return nil, errors.Wrapf(err, "unmarshal %q value union JSON", pv.Property.Name)
		}

		res.PropVals = append(res.PropVals, pv)
	}

	return &res, nil
}

func (r repository) CreateProperty(ctx context.Context, property entities.Property) error {
	_, err := sq.Insert("exercise.property").
		Columns("name", "type").
		Values(property.Name, property.Type).
		PlaceholderFormat(sq.Dollar).
		RunWith(r.conn).
		ExecContext(ctx)
	if err != nil {
		return errors.Wrapf(err, "insert %q property", property.Name)
	}

	return nil
}

func (r repository) DeleteProperty(ctx context.Context, name string) error {
	_, err := sq.Delete("exercise.property").
		Where(sq.Eq{"name": name}).
		PlaceholderFormat(sq.Dollar).
		RunWith(r.conn).
		ExecContext(ctx)
	if err != nil {
		return errors.Wrapf(err, "delete %q property", name)
	}

	return nil
}

func (r repository) GetProperties(ctx context.Context) (props []entities.Property, err error) {
	rows, err := sq.Select("name", "type").
		From("exercise.property").
		RunWith(r.conn).
		QueryContext(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "select properties query")
	}

	for rows.Next() {
		p := entities.Property{}

		if err := rows.Scan(&p.Name, &p.Type); err != nil {
			return nil, errors.Wrap(err, "select properties scan")
		}

		props = append(props, p)
	}

	return props, nil
}

func (r repository) addExercisePropValues(ctx context.Context, tx *sql.Tx, name string, propValues map[string]entities.PropertyValueUnion) error {
	q := sq.Insert("exercise.exercise_property_value").
		PlaceholderFormat(sq.Dollar).
		RunWith(tx).
		Columns("exercise", "property", "value_union")

	for pn, pv := range propValues {
		u, err := json.Marshal(pv)
		if err != nil {
			return errors.Wrapf(err, "serialize property %q value %v", pn, pv)
		}

		q = q.Values(name, pn, u)
	}

	_, err := q.ExecContext(ctx)
	if err != nil {
		return errors.Wrapf(err, "insert %q exercise property value query", name)
	}

	return nil
}

func (r repository) deleteExercisePropValues(ctx context.Context, tx *sql.Tx, name string) error {
	_, err := sq.Delete("exercise.exercise_property_value").
		Where(sq.Eq{"exercise": name}).
		PlaceholderFormat(sq.Dollar).
		RunWith(tx).
		ExecContext(ctx)
	if err != nil {
		return errors.Wrapf(err, "delete %q exercise properties query", name)
	}

	return nil
}
