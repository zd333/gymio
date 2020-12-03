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

	CreateProperty(ctx context.Context, property entities.Property) error
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
		return errors.Wrapf(err, "begin create exercise transaction")
	}

	_, err = sq.Insert("exercise.exercise").
		RunWith(tx).
		Columns("name").
		Values(name).
		ExecContext(ctx)
	if err != nil {
		err = tx.Rollback()
		if err != nil {
			return errors.Wrapf(err, "rollback insert exercise")
		}

		return errors.Wrapf(err, "insert exercise")
	}

	err = r.addExercisePropValues(ctx, tx, name, propValues)
	if err != nil {
		err = tx.Rollback()
		if err != nil {
			return errors.Wrapf(err, "rollback create exercise transaction")
		}

		return errors.Wrapf(err, "add exercise property values")
	}

	err = tx.Commit()
	if err != nil {
		return errors.Wrapf(err, "commit create exercise transaction")
	}

	return nil
}

func (r repository) UpdateExercise(ctx context.Context, name string, propValues map[string]entities.PropertyValueUnion) error {
	tx, err := r.conn.BeginTx(ctx, &sql.TxOptions{})
	if err != nil {
		return errors.Wrapf(err, "begin update exercise transaction")
	}

	err = r.deleteExercisePropValues(ctx, tx, name)
	if err != nil {
		err = tx.Rollback()
		if err != nil {
			return errors.Wrapf(err, "rollback update exercise transaction")
		}

		return errors.Wrapf(err, "delete exercise property values")
	}

	err = r.addExercisePropValues(ctx, tx, name, propValues)
	if err != nil {
		err = tx.Rollback()
		if err != nil {
			return errors.Wrapf(err, "rollback update exercise transaction")
		}

		return errors.Wrapf(err, "add exercise property values")
	}

	err = tx.Commit()
	if err != nil {
		return errors.Wrapf(err, "commit update exercise transaction")
	}

	return nil
}

func (r repository) CreateProperty(ctx context.Context, property entities.Property) error {
	_, err := sq.Insert("exercise.property").
		RunWith(r.conn).
		Columns("name", "type").
		Values(property.Name, property.Type).
		ExecContext(ctx)
	if err != nil {
		return errors.Wrapf(err, "insert property")
	}

	return nil
}

func (r repository) addExercisePropValues(ctx context.Context, tx *sql.Tx, name string, propValues map[string]entities.PropertyValueUnion) error {
	q := sq.Insert("exercise.exercise_property_value").
		RunWith(tx).
		Columns("exercise", "property", "value_union")

	for pn, pv := range propValues {
		u, err := json.Marshal(pv)
		if err != nil {
			return errors.Wrapf(err, "serialize property %q value %v", pn, pv)
		}

		q.Values(name, pn, u)
	}

	_, err := q.ExecContext(ctx)
	if err != nil {
		return errors.Wrapf(err, "insert exercise property value query")
	}

	return nil
}

func (r repository) deleteExercisePropValues(ctx context.Context, tx *sql.Tx, name string) error {
	_, err := sq.Delete("exercise.exercise_property_value").
		RunWith(tx).
		Where(sq.Eq{"exercise": name}).
		ExecContext(ctx)
	if err != nil {
		return errors.Wrapf(err, "delete exercise properties query")
	}

	return nil
}
