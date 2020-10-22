package endpoints

import "github.com/zd333/gymio/svc/pkg/exercise/entities"

type CreateExerciseRequest struct {
	NameTKey string
	PropVals []entities.PropertyValue
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
	PropVals []entities.PropertyValue
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

type GetPropertiesRequest struct{}

type GetPropertiesResponse struct {
	Props []entities.Property
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

type FindExercisesByPropertiesRequest struct {
	OrConditions []entities.FindExercisesOrCondition
}

type FindExercisesByPropertiesResponse struct {
	Exercises []entities.Exercise
}
