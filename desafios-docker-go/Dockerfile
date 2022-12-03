FROM golang:alpine3.17 AS builder

WORKDIR /go/src

COPY hello.go .

RUN go install hello.go

FROM scratch

COPY --from=builder /go/bin .

ENTRYPOINT [ "./hello" ]