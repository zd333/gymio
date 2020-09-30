package endpoints

import (
	"context"

	"github.com/go-kit/kit/endpoint"
	"github.com/zd333/gymio/svc/pkg/entities"
	"github.com/zd333/gymio/svc/pkg/service"
)

type Endpoints struct {
	CreateExercise             endpoint.Endpoint
	GetExercise                endpoint.Endpoint
	UpdateExercise             endpoint.Endpoint
	DeleteExercise             endpoint.Endpoint
	CreateProperty             endpoint.Endpoint
	UpdateProperty             endpoint.Endpoint
	DeleteProperty             endpoint.Endpoint
	UpdatePropertiesOfExercise endpoint.Endpoint
	FindExercisesByProperties  endpoint.Endpoint
}

func New(svc service.Service) *Endpoints {
	return &Endpoints{
		CreateExercise:             makeCreateExerciseEndpoint(svc),
		GetExercise:                makeGetExerciseEndpoint(svc),
		UpdateExercise:             makeUpdateExerciseEndpoint(svc),
		DeleteExercise:             makeDeleteExerciseEndpoint(svc),
		CreateProperty:             makeCreatePropertyEndpoint(svc),
		UpdateProperty:             makeUpdatePropertyEndpoint(svc),
		DeleteProperty:             makeDeletePropertyEndpoint(svc),
		UpdatePropertiesOfExercise: makeUpdatePropertiesOfExerciseEndpoint(svc),
		FindExercisesByProperties:  makeFindExercisesByPropertiesEndpoint(svc),
	}
}

func makeCreateExerciseEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*CreateExerciseRequest)
		data := entities.ExerciseData{
			NameTKey: req.NameTKey,
			Props:    req.Props,
		}

		result, err := svc.CreateExercise(ctx, data)
		if err != nil {
			return nil, err
		}

		return CreateExerciseResponse{
			ID: result,
		}, nil
	}
}

func makeGetExerciseEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*GetExerciseRequest)

		result, err := svc.GetExercise(ctx, req.ID)
		if err != nil {
			return nil, err
		}

		return GetExerciseResponse{
			Exercise: result,
		}, nil
	}
}

func makeUpdateExerciseEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*UpdateExerciseRequest)
		data := entities.ExerciseData{
			NameTKey: req.NameTKey,
		}

		err := svc.UpdateExercise(ctx, req.ID, data)
		if err != nil {
			return nil, err
		}

		return UpdateExerciseResponse{}, nil
	}
}

func makeDeleteExerciseEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*DeleteExerciseRequest)

		err := svc.DeleteExercise(ctx, req.ID)
		if err != nil {
			return nil, err
		}

		return DeleteExerciseResponse{}, nil
	}
}

func makeCreatePropertyEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*CreatePropertyRequest)
		data := entities.PropertyData{
			NameTKey: req.NameTKey,
			Type:     req.Type,
		}

		result, err := svc.CreateProperty(ctx, data)
		if err != nil {
			return nil, err
		}

		return CreatePropertyResponse{
			ID: result,
		}, nil
	}
}

func makeUpdatePropertyEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*UpdatePropertyRequest)
		data := entities.PropertyData{
			NameTKey: req.NameTKey,
		}

		err := svc.UpdateProperty(ctx, req.ID, data)
		if err != nil {
			return nil, err
		}

		return UpdatePropertyResponse{}, nil
	}
}

func makeDeletePropertyEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*DeletePropertyRequest)

		err := svc.DeleteProperty(ctx, req.ID)
		if err != nil {
			return nil, err
		}

		return DeletePropertyResponse{}, nil
	}
}

func makeUpdatePropertiesOfExerciseEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*UpdatePropertiesOfExerciseRequest)

		err := svc.UpdatePropertiesOfExercise(ctx, req.ExerciseID, req.PropsToAdd, req.PropsToUpdate, req.PropIDsToRemove)
		if err != nil {
			return nil, err
		}

		return UpdatePropertiesOfExerciseResponse{}, nil
	}
}

func makeFindExercisesByPropertiesEndpoint(svc service.Service) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(*FindExercisesByPropertiesRequest)

		result, err := svc.FindExercisesByProperties(ctx, req.Conditions)
		if err != nil {
			return nil, err
		}

		return FindExercisesByPropertiesResponse{
			Exercises: result,
		}, nil
	}
}