package endpoints

import "github.com/zd333/gymio/svc/pkg/exercise/entities"

type CreateExerciseRequest struct {
	NameTKey string
	Props    []entities.PropertyValue
}

type CreateExerciseResponse struct {
	ID string
}

type GetExerciseRequest struct {
	ID string
}

type GetExerciseResponse struct {
	Exercise entities.Exercise
}

type UpdateExerciseRequest struct {
	ID       string
	NameTKey string
}

type UpdateExerciseResponse struct {
}

type DeleteExerciseRequest struct {
	ID string
}

type DeleteExerciseResponse struct {
}

type CreatePropertyRequest struct {
	NameTKey string
	Type     entities.PropertyType
}

type CreatePropertyResponse struct {
	ID string
}

type UpdatePropertyRequest struct {
	ID       string
	NameTKey string
}

type UpdatePropertyResponse struct {
}

type DeletePropertyRequest struct {
	ID string
}

type DeletePropertyResponse struct {
}

type UpdatePropertiesOfExerciseRequest struct {
	ExerciseID      string
	PropsToAdd      []entities.PropertyValue
	PropsToUpdate   []entities.PropertyValue
	PropIDsToRemove []string
}

type UpdatePropertiesOfExerciseResponse struct {
}

type FindExercisesByPropertiesRequest struct {
	Conditions entities.FindExercisesConditions
}

type FindExercisesByPropertiesResponse struct {
	Exercises []*entities.Exercise
}
