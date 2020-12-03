package endpoints

import (
	"context"

	"github.com/go-kit/kit/endpoint"
	"github.com/zd333/gymio/svc/pkg/exercise/service"
)

type Endpoints struct {
	CreateExercise            endpoint.Endpoint
	GetExercise               endpoint.Endpoint
	UpdateExercise            endpoint.Endpoint
	DeleteExercise            endpoint.Endpoint
	CreateProperty            endpoint.Endpoint
	GetProperties             endpoint.Endpoint
	DeleteProperty            endpoint.Endpoint
	FindExercisesByProperties endpoint.Endpoint
}

func New(svc service.Service) *Endpoints {
	return &Endpoints{
		CreateExercise:            makeCreateExerciseEndpoint(svc),
		GetExercise:               makeGetExerciseEndpoint(svc),
		UpdateExercise:            makeUpdateExerciseEndpoint(svc),
		DeleteExercise:            makeDeleteExerciseEndpoint(svc),
		GetProperties:             makeGetPropertiesEndpoint(svc),
		CreateProperty:            makeCreatePropertyEndpoint(svc),
		DeleteProperty:            makeDeletePropertyEndpoint(svc),
		FindExercisesByProperties: makeFindExercisesByPropertiesEndpoint(svc),
	}
}

func makeCreateExerciseEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*CreateExerciseRequest)

		err := svc.CreateExercise(ctx, req.Name, req.PropValues)
		if err != nil {
			return nil, err
		}

		return &CreateExerciseResponse{}, nil
	}
}

func makeGetExerciseEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*GetExerciseRequest)

		result, err := svc.GetExercise(ctx, req.Name)
		if err != nil {
			return nil, err
		}

		return &GetExerciseResponse{
			Exercise: *result,
		}, nil
	}
}

func makeUpdateExerciseEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*UpdateExerciseRequest)

		err := svc.UpdateExercise(ctx, req.Name, req.PropValues)
		if err != nil {
			return nil, err
		}

		return &UpdateExerciseResponse{}, nil
	}
}

func makeDeleteExerciseEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*DeleteExerciseRequest)

		err := svc.DeleteExercise(ctx, req.Name)
		if err != nil {
			return nil, err
		}

		return &DeleteExerciseResponse{}, nil
	}
}

func makeCreatePropertyEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*CreatePropertyRequest)

		err := svc.CreateProperty(ctx, req.Property)
		if err != nil {
			return nil, err
		}

		return &CreatePropertyResponse{}, nil
	}
}

func makeGetPropertiesEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		result, err := svc.GetProperties(ctx)
		if err != nil {
			return nil, err
		}

		return &GetPropertiesResponse{
			Props: result,
		}, nil
	}
}

func makeDeletePropertyEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*DeletePropertyRequest)

		err := svc.DeleteProperty(ctx, req.Name)
		if err != nil {
			return nil, err
		}

		return &DeletePropertyResponse{}, nil
	}
}

func makeFindExercisesByPropertiesEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*FindExercisesByPropertiesRequest)

		result, err := svc.FindExercisesByProperties(ctx, req.OrConditions)
		if err != nil {
			return nil, err
		}

		return &FindExercisesByPropertiesResponse{
			Exercises: result,
		}, nil
	}
}
