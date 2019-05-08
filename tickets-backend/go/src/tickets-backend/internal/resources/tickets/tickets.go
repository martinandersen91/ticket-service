package tickets

import (
	"github.com/labstack/echo"
	"net/http"
	"tickets-backend/internal/dao"
)

func Route(group *echo.Group) {

	group.GET("/", GetTickets)
	group.POST("/", InsertTicket)
}


func GetTickets(c echo.Context) error {


	tickets, err :=  dao.GetTickets()
	if err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}


	return c.JSON(http.StatusOK, tickets)
}


func InsertTicket(c echo.Context) error {

	// Some function to insert data

	// https://echo.labstack.com/guide/request

	return c.JSON(http.StatusOK, "")
}