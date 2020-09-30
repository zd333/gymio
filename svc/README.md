# Gymio services

## exercise-api

### Dev mode

* `make setup` to install all dependencies
* `make lint` to lint

### Releasing

```bash
heroku container:push worker -a gymio-exercise-service
heroku container:release worker -a gymio-exercise-service
```
