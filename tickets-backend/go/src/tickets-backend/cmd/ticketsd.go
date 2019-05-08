package main

import (
	"fmt"
	"github.com/labstack/echo"
	"github.com/labstack/gommon/log"
	"net/http"
	"tickets-backend/internal/dao"
	"tickets-backend/internal/resources/tickets"
)

func main() {

	dao.Init("postgres://postgres:qwerty@postgres:5432/tickets")

	log.Info("Init ECHO")
	e := echo.New()
	e.GET("/health-check", func(c echo.Context) error {
		log.Info("Request received")
		return c.String(http.StatusOK, fmt.Sprintf("Running OK"))
	})

	tickets.Route(e.Group("/tickets"))

	e.Logger.Fatal(e.Start(":8000"))

}
