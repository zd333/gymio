module github.com/zd333/gymio/svc

go 1.15

replace github.com/zd333/gymio/protobuf/gen/go => ../protobuf/gen/go

require (
	github.com/Masterminds/squirrel v1.4.0
	github.com/go-kit/kit v0.10.0
	github.com/lib/pq v1.8.0
	github.com/pkg/errors v0.9.1
	github.com/rubenv/sql-migrate v0.0.0-20200616145509-8d140a17f351
	github.com/zd333/gymio/protobuf/gen/go v0.0.1
	google.golang.org/grpc v1.33.1
)
