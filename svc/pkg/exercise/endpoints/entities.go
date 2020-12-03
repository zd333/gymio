package endpoints

import "github.com/zd333/gymio/svc/pkg/exercise/entities"

type CreateExerciseRequest struct {
	Name       string
	PropValues map[string]entities.PropertyValueUnion
}

type CreateExerciseResponse struct{}

type GetExerciseRequest struct {
	Name string
}

type GetExerciseResponse struct {
	Exercise entities.Exercise
}

type UpdateExerciseRequest struct {
	Exercise   entities.Exercise
	Name       string
	PropValues map[string]entities.PropertyValueUnion
}

type UpdateExerciseResponse struct {
}

type DeleteExerciseRequest struct {
	Name string
}

type DeleteExerciseResponse struct{}

type CreatePropertyRequest struct {
	Property entities.Property
}

type CreatePropertyResponse struct{}

type GetPropertiesRequest struct{}

type GetPropertiesResponse struct {
	Props []entities.Property
}

type DeletePropertyRequest struct {
	Name string
}

type DeletePropertyResponse struct{}

type FindExercisesByPropertiesRequest struct {
	OrConditions []entities.FindExercisesOrCondition
}

type FindExercisesByPropertiesResponse struct {
	Exercises []entities.Exercise
}
