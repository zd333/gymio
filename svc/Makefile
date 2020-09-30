setup-code-lint: ## Install the code-lint tool
	curl -sfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(shell go env GOPATH)/bin v1.23.7

setup: setup-code-lint dep ## Install all the build and lint dependencies

dep: ## Install all build dependencies
	go mod download
	go mod tidy
	go mod vendor

lint: ## Run linter for the code
	golangci-lint run

install-exercise-api: dep ## Build and install exercise API app
	go install -mod vendor -race ./cmd/exercise-api

# Absolutely awesome: http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
