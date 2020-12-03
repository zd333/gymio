FROM golang:1.15

WORKDIR $GOPATH/src/github.com/zd333/gymio
COPY . .

RUN cd svc && make install-exercise-api

CMD ["exercise-api"]
