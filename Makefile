setup: ## Install tools
	make -C protobuf setup
	make -C svc setup
	npm i

generate: ## Generate protobuf libraries for all languages
	make -C protobuf generate

start-dev-env: ## Start services for local (dev) env
	make -C svc start-dev-env

stop-dev-env: ## Stop local (dev) env services
	make -C svc stop-dev-env

# Absolutely awesome: http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
