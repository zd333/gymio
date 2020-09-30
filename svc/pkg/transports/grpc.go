package grpc

import (
	grpctransport "github.com/go-kit/kit/transport/grpc"
	// "github.com/zd333/gymio/svc/pkg/endpoints"
	// exercisev1 "github.com/zd333/gymio/protobuf/gen/go/exercise/v1"
)

type serverGRPC struct {
	CreateExercise             grpctransport.Handler
	GetExercise                grpctransport.Handler
	UpdateExercise             grpctransport.Handler
	DeleteExercise             grpctransport.Handler
	CreateProperty             grpctransport.Handler
	UpdateProperty             grpctransport.Handler
	DeleteProperty             grpctransport.Handler
	UpdatePropertiesOfExercise grpctransport.Handler
	FindExercisesByProperties  grpctransport.Handler
}

// func makeGRPCHandler(ep *endpoints.Endpoints) exercisev1.ExerciseAPIServiceService {
// 	return &exercisev1.ExerciseAPIServiceService{
// 		CreateExercise: grpctransport.NewServer(ep.CreateExercise),
// 	}
// }
