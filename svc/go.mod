module github.com/zd333/gymio/svc

go 1.15

replace github.com/zd333/gymio/protobuf/gen/go => ../protobuf/gen/go

require (
	github.com/go-kit/kit v0.10.0
	github.com/golang/protobuf v1.4.1
	github.com/pkg/errors v0.9.1
	github.com/zd333/gymio/protobuf/gen/go v0.0.1
	google.golang.org/grpc v1.33.1
	google.golang.org/protobuf v1.25.0
)
