package grpc

import (
	"context"

	grpctransport "github.com/go-kit/kit/transport/grpc"
	exercisev1 "github.com/zd333/gymio/svc/gen/exercise/v1"
	"github.com/zd333/gymio/svc/pkg/exercise/endpoints"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func Register(ep *endpoints.Endpoints) {
	// TODO: pass server from outside
	server := grpc.NewServer()
	impl := new(ep)

	exercisev1.RegisterExerciseAPIService(server, &impl)
}

func new(ep *endpoints.Endpoints) exercisev1.ExerciseAPIService {
	createExerciseHandler := grpctransport.NewServer(ep.CreateExercise, decodeCreateExerciseRequest, encodeCreateExerciseResponse)
	getExerciseHandler := grpctransport.NewServer(ep.GetExercise, decodeGetExerciseRequest, encodeGetExerciseResponse)
	updateExerciseHandler := grpctransport.NewServer(ep.UpdateExercise, decodeUpdateExerciseRequest, encodeUpdateExerciseResponse)
	deleteExerciseHandler := grpctransport.NewServer(ep.DeleteExercise, decodeDeleteExerciseRequest, encodeDeleteExerciseResponse)
	createPropertyHandler := grpctransport.NewServer(ep.CreateProperty, decodeCreatePropertyRequest, encodeCreatePropertyResponse)
	getPropertiesHandler := grpctransport.NewServer(ep.GetProperties, decodeGetPropertiesRequest, encodeGetPropertiesResponse)
	updatePropertyHandler := grpctransport.NewServer(ep.UpdateProperty, decodeUpdatePropertyRequest, encodeUpdatePropertyResponse)
	deletePropertyHandler := grpctransport.NewServer(ep.DeleteProperty, decodeDeletePropertyRequest, encodeDeletePropertyResponse)
	findExercisesByPropertiesHandler := grpctransport.NewServer(ep.FindExercisesByProperties, decodeFindExercisesByPropertiesRequest, encodeFindExercisesByPropertiesResponse)

	return exercisev1.ExerciseAPIService{
		CreateExercise: func(ctx context.Context, request *exercisev1.CreateExerciseRequest) (*exercisev1.CreateExerciseResponse, error) {
			_, resp, err := createExerciseHandler.ServeGRPC(ctx, request)
			if err != nil {
				return nil, errorEncoder(err)
			}

			return resp.(*exercisev1.CreateExerciseResponse), nil
		},
		GetExercise: func(ctx context.Context, request *exercisev1.GetExerciseRequest) (*exercisev1.GetExerciseResponse, error) {
			_, resp, err := getExerciseHandler.ServeGRPC(ctx, request)
			if err != nil {
				return nil, errorEncoder(err)
			}

			return resp.(*exercisev1.GetExerciseResponse), nil
		},
		UpdateExercise: func(ctx context.Context, request *exercisev1.UpdateExerciseRequest) (*exercisev1.UpdateExerciseResponse, error) {
			_, resp, err := updateExerciseHandler.ServeGRPC(ctx, request)
			if err != nil {
				return nil, errorEncoder(err)
			}

			return resp.(*exercisev1.UpdateExerciseResponse), nil
		},
		DeleteExercise: func(ctx context.Context, request *exercisev1.DeleteExerciseRequest) (*exercisev1.DeleteExerciseResponse, error) {
			_, resp, err := deleteExerciseHandler.ServeGRPC(ctx, request)
			if err != nil {
				return nil, errorEncoder(err)
			}

			return resp.(*exercisev1.DeleteExerciseResponse), nil
		},
		CreateProperty: func(ctx context.Context, request *exercisev1.CreatePropertyRequest) (*exercisev1.CreatePropertyResponse, error) {
			_, resp, err := createPropertyHandler.ServeGRPC(ctx, request)
			if err != nil {
				return nil, errorEncoder(err)
			}

			return resp.(*exercisev1.CreatePropertyResponse), nil
		},
		GetProperties: func(ctx context.Context, request *exercisev1.GetPropertiesRequest) (*exercisev1.GetPropertiesResponse, error) {
			_, resp, err := getPropertiesHandler.ServeGRPC(ctx, request)
			if err != nil {
				return nil, errorEncoder(err)
			}

			return resp.(*exercisev1.GetPropertiesResponse), nil
		},
		UpdateProperty: func(ctx context.Context, request *exercisev1.UpdatePropertyRequest) (*exercisev1.UpdatePropertyResponse, error) {
			_, resp, err := updatePropertyHandler.ServeGRPC(ctx, request)
			if err != nil {
				return nil, errorEncoder(err)
			}

			return resp.(*exercisev1.UpdatePropertyResponse), nil
		},
		DeleteProperty: func(ctx context.Context, request *exercisev1.DeletePropertyRequest) (*exercisev1.DeletePropertyResponse, error) {
			_, resp, err := deletePropertyHandler.ServeGRPC(ctx, request)
			if err != nil {
				return nil, errorEncoder(err)
			}

			return resp.(*exercisev1.DeletePropertyResponse), nil
		},
		FindExercisesByProperties: func(ctx context.Context, request *exercisev1.FindExercisesByPropertiesRequest) (*exercisev1.FindExercisesByPropertiesResponse, error) {
			_, resp, err := findExercisesByPropertiesHandler.ServeGRPC(ctx, request)
			if err != nil {
				return nil, errorEncoder(err)
			}

			return resp.(*exercisev1.FindExercisesByPropertiesResponse), nil
		},
	}
}

func errorEncoder(err error) error {
	// TODO: add relevant error codes
	return status.Error(codes.Internal, err.Error())
}
