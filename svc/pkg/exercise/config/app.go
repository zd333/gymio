package config

type config struct {
	GRPC struct {
		Port string
	}
	DB struct {
		ConnectionString string
	}
}

func New() config {
	// TODO: get from file/env vars
	var c config

	c.GRPC.Port = ":9042"

	c.DB.ConnectionString = "postgres://123:123@localhost:3432/gymio_dev?sslmode=disable"

	return c
}
