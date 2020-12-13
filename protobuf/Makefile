setup: ## Install tools
	cd gen/go
	go install google.golang.org/protobuf/cmd/protoc-gen-go
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc
	brew list protobuf || brew install protobuf
	brew tap bufbuild/buf
	brew list buf || brew install buf

lint: # Lint
	buf check lint

check-breaking-changes: # Check breaking changes
	buf check breaking --against-input image.bin

build-image-skip-checks: # Build new buf image without any checks
	buf image build -o image.bin

build-image: lint check-breaking-changes build-image-skip-checks # Check protos and build new buf image

generate-go: ## Generate go protobuf libraries
	rm -rf gen/go/*/
	protoc --experimental_allow_proto3_optional --descriptor_set_in=./image.bin --go_out=./gen/go $$(buf ls-files --input ./image.bin)
	protoc --experimental_allow_proto3_optional --descriptor_set_in=./image.bin --go-grpc_out=./gen/go $$(buf ls-files --input ./image.bin)

generate-ts: ## Generate TypeScript protobuf libraries
	rm -rf gen/ts/*/
	protoc --experimental_allow_proto3_optional --descriptor_set_in=./image.bin --plugin="protoc-gen-ts=../node_modules/ts-protoc-gen/bin/protoc-gen-ts" --plugin=protoc-gen-grpc=../node_modules/.bin/grpc_tools_node_protoc_plugin --js_out="import_style=commonjs,binary:./gen/ts" --ts_out="service=grpc-node:./gen/ts" --grpc_out="./gen/ts" $$(buf ls-files --input ./image.bin)

generate: build-image generate-go generate-ts ## Generate protobuf libraries

# Absolutely awesome: http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
