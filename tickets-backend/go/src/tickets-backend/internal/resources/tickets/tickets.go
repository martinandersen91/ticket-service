package tickets

import (
	"github.com/labstack/echo"
	"net/http"
	"tickets-backend/internal/dao"
	"tickets-backend/internal/model"
)

func Route(group *echo.Group) {

	group.GET("/", GetTickets)
	group.POST("/insert", InsertTicket)
}


func GetTickets(c echo.Context) error {


	tickets, err :=  dao.GetTickets()
	if err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}


	return c.JSON(http.StatusOK, tickets)
}


func InsertTicket(c echo.Context) error {

	ticketData := new(model.TicketData)
	if err := c.Bind(ticketData); err != nil {
		return err
	}

	err :=  dao.InsertTicket(ticketData)
	if err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	return c.JSON(http.StatusOK, "Ticket inserted")
}