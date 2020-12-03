package main

import (
	"database/sql"
	"fmt"
	"log"
	"net"

	_ "github.com/lib/pq"

	migrate "github.com/rubenv/sql-migrate"

	"github.com/zd333/gymio/svc/pkg/exercise/config"
	"github.com/zd333/gymio/svc/pkg/exercise/endpoints"
	"github.com/zd333/gymio/svc/pkg/exercise/service"
	"github.com/zd333/gymio/svc/pkg/exercise/transports/grpc"
)

func main() {
	// TODO: cleanup
	cfg := config.New()

	migrations := &migrate.FileMigrationSource{
		Dir: "migrations",
	}

	conn, err := sql.Open("postgres", cfg.DB.ConnectionString)
	if err != nil {
		log.Fatalf("failed to open connection to DB: %v", err)
	}

	n, err := migrate.Exec(conn, "postgres", migrations, migrate.Up)
	if err != nil {
		log.Fatalf("failed to apply migrations: %v", err)
	}
	fmt.Printf("Applied %d migrations!\n", n)

	svc := service.New(conn)
	ep := endpoints.New(svc)
	srv := grpc.New(ep)

	lis, err := net.Listen("tcp", cfg.GRPC.Port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	if err := srv.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
