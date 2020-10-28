package config

type config struct {
	GRPCPort string
}

func New() config {
	// TODO: get from file/env vars
	return config{
		GRPCPort: ":9042",
	}
}
