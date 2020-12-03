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
		return errors.Wrapf(err, "begin add exercise transaction")
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

	_, err = q.ExecContext(ctx)
	if err != nil {
		err = tx.Rollback()
		if err != nil {
			return errors.Wrapf(err, "rollback insert exercise property value")
		}

		return errors.Wrapf(err, "insert exercise property value")
	}

	err = tx.Commit()
	if err != nil {
		return errors.Wrapf(err, "commit add exercise transaction")
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
