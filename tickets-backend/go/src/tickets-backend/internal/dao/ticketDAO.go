package dao

import (
	"github.com/labstack/gommon/log"
	"tickets-backend/internal/api"
)


func GetTickets() ([]api.Ticket, error) {

	db := GetDB().Unsafe()

	q := `
		SELECT * 
		FROM tickets;
	`

	stmt, err := db.PrepareNamed(q)
	if err != nil {
		log.Error(err)
		return nil, err
	}

	tickets := []api.Ticket{}
	err = stmt.Select(&tickets, map[string]interface{}{})
	if err != nil {
		log.Error(err)
		return nil, err
	}

	return tickets, nil
}