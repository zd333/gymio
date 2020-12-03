# Gymio services

## exercise-api

### Dev mode

* `make setup` to install all dependencies
* `make lint` to lint
* `make start-dev-env` to run all required services locally, then run app
* [http://localhost:3080/](http://localhost:3080/) to access local DB

### Deployment

#### Prerequisites

* create Heroku account
* create `gymio-exercise-api` app
* run `heroku ps:scale worker=1 -a gymio-exercise-api`

#### Deploying current repo state

```bash
heroku login
heroku container:login
heroku container:push worker -a gymio-exercise-api --context-path ..
heroku container:release worker -a gymio-exercise-api
```
