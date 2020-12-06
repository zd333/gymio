package service

import (
	"context"
	"database/sql"

	"github.com/zd333/gymio/svc/pkg/exercise/entities"
	"github.com/zd333/gymio/svc/pkg/exercise/repository"
)

type Service interface {
	CreateExercise(ctx context.Context, name string, propValues map[string]entities.PropertyValueUnion) error
	UpdateExercise(ctx context.Context, name string, propValues map[string]entities.PropertyValueUnion) error
	DeleteExercise(ctx context.Context, name string) error
	GetExercise(ctx context.Context, name string) (*entities.Exercise, error)

	CreateProperty(ctx context.Context, property entities.Property) error
	DeleteProperty(ctx context.Context, name string) error
	GetProperties(ctx context.Context) (props []entities.Property, err error)

	FindExercisesByProperties(ctx context.Context, conditions []entities.FindExercisesOrCondition) ([]entities.Exercise, error)
}

func New(conn *sql.DB) Service {
	repo := repository.New(conn)
	svc := service{
		repo: repo,
	}

	return svc
}

type service struct {
	repo repository.Repository
}

func (s service) CreateExercise(ctx context.Context, name string, propValues map[string]entities.PropertyValueUnion) error {
	return s.repo.CreateExercise(ctx, name, propValues)
}

func (s service) UpdateExercise(ctx context.Context, name string, propValues map[string]entities.PropertyValueUnion) error {
	return s.repo.UpdateExercise(ctx, name, propValues)
}

func (s service) DeleteExercise(ctx context.Context, name string) error {
	return s.repo.DeleteExercise(ctx, name)
}

func (s service) GetExercise(ctx context.Context, name string) (*entities.Exercise, error) {
	return s.repo.GetExercise(ctx, name)
}

func (s service) CreateProperty(ctx context.Context, property entities.Property) error {
	return s.repo.CreateProperty(ctx, property)
}

func (s service) GetProperties(ctx context.Context) (props []entities.Property, err error) {
	return s.repo.GetProperties(ctx)
}

func (s service) DeleteProperty(ctx context.Context, name string) error {
	return s.repo.DeleteProperty(ctx, name)
}

func (s service) FindExercisesByProperties(ctx context.Context, conditions []entities.FindExercisesOrCondition) ([]entities.Exercise, error) {
	return nil, entities.ErrNotImplemented
}
