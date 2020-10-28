package main

import (
	"log"
	"net"

	"github.com/zd333/gymio/svc/pkg/exercise/config"
	"github.com/zd333/gymio/svc/pkg/exercise/endpoints"
	"github.com/zd333/gymio/svc/pkg/exercise/service"
	"github.com/zd333/gymio/svc/pkg/exercise/transports/grpc"
)

func main() {
	cfg := config.New()
	svc := service.New()
	ep := endpoints.New(svc)
	srv := grpc.New(ep)
	lis, err := net.Listen("tcp", cfg.GRPCPort)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	if err := srv.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
