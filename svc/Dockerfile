FROM golang:1.15

WORKDIR $GOPATH/src/github.com/zd333/gymio/svc

COPY . .

RUN make install-exercise-api

CMD ["exercise-api"]
