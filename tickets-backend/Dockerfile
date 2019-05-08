FROM golang:1.12-alpine

RUN apk add --no-cache git curl build-base bash shadow

RUN go get github.com/githubnemo/CompileDaemon

RUN mkdir -p /go/src/tickets-backend
WORKDIR /go/src/tickets-backend
ENV GO111MODULE=on
EXPOSE 8000

ARG UID
ARG USER

RUN if test "$USER" != 'root'; then groupadd --gid $UID $USER \
  && useradd --uid $UID --gid $USER --shell /bin/bash --create-home $USER; fi

RUN chown -R $UID /go

USER $USER

RUN printf "#! /bin/bash \n\
go build -o tickets-backend cmd/ticketsd.go \n\
CompileDaemon -build=\"go build -o tickets-backend cmd/ticketsd.go\" -command=\"/go/src/tickets-backend/tickets-backend\" -directory=\"/go/src/tickets-backend\"" >> ~/start.sh

RUN chmod +x ~/start.sh

CMD ~/start.sh
