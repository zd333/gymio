package service

import (
	"context"

	"github.com/zd333/gymio/svc/pkg/exercise/entities"
)

type Service interface {
	CreateExercise(ctx context.Context, data entities.ExerciseData) (id string, err error)
	GetExercise(ctx context.Context, id string) (entities.Exercise, error)
	UpdateExercise(ctx context.Context, id string, data entities.ExerciseData) error
	DeleteExercise(ctx context.Context, id string) error

	CreateProperty(ctx context.Context, data entities.PropertyData) (id string, err error)
	UpdateProperty(ctx context.Context, id string, data entities.PropertyData) error
	DeleteProperty(ctx context.Context, id string) error

	UpdatePropertiesOfExercise(ctx context.Context, exerciseID string, add []entities.PropertyValue, update []entities.PropertyValue, delete []string) error

	FindExercisesByProperties(ctx context.Context, conditions entities.FindExercisesConditions) ([]*entities.Exercise, error)
}

func New() Service {
	svc := exerciseService{}

	return svc
}

type exerciseService struct {
}

func (s exerciseService) CreateExercise(ctx context.Context, data entities.ExerciseData) (id string, err error) {
	return "", entities.ErrNotImplemented
}

func (s exerciseService) GetExercise(ctx context.Context, id string) (entities.Exercise, error) {
	return entities.Exercise{}, entities.ErrNotImplemented
}

func (s exerciseService) UpdateExercise(ctx context.Context, id string, data entities.ExerciseData) error {
	return entities.ErrNotImplemented
}

func (s exerciseService) DeleteExercise(ctx context.Context, id string) error {
	return entities.ErrNotImplemented
}

func (s exerciseService) CreateProperty(ctx context.Context, data entities.PropertyData) (id string, err error) {
	return "", entities.ErrNotImplemented
}

func (s exerciseService) UpdateProperty(ctx context.Context, id string, data entities.PropertyData) error {
	return entities.ErrNotImplemented
}

func (s exerciseService) DeleteProperty(ctx context.Context, id string) error {
	return entities.ErrNotImplemented
}

func (s exerciseService) UpdatePropertiesOfExercise(ctx context.Context, exerciseID string, add []entities.PropertyValue, update []entities.PropertyValue, delete []string) error {
	return entities.ErrNotImplemented
}

func (s exerciseService) FindExercisesByProperties(ctx context.Context, conditions entities.FindExercisesConditions) ([]*entities.Exercise, error) {
	return nil, entities.ErrNotImplemented
}
