package config

import "os"

type config struct {
	GRPC struct {
		Port string
	}
	DB struct {
		ConnectionString string
	}
}

func New() config {
	var c config

	c.GRPC.Port = os.Getenv("EXERCISE_API_GRPC_PORT")
	c.DB.ConnectionString = os.Getenv("EXERCISE_API_DB_CONNECTION_STRING")

	return c
}
