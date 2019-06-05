package dao

import (
	"github.com/labstack/gommon/log"
	"tickets-backend/internal/api"
	"tickets-backend/internal/model"
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

func InsertTicket(ticketData *model.TicketData) (error) {

	db := GetDB().Unsafe()

	count := `
		SELECT count(*) as rows
		FROM tickets;
	`
	rows := 0
	err := db.QueryRow(count).Scan(&rows);
	if err != nil {
		log.Error(err)
		return err
	}

	q := `
		SELECT max(ticket_id) as id
		FROM tickets;
	`
	id := 0
	if rows != 0 {
		err = db.QueryRow(q).Scan(&id);
		if err != nil {
			log.Error(err)
			return err
		}
	}

	sqlStatement := `
		INSERT INTO tickets (ticket_id, title, content, status, author)
		VALUES ($1, $2, $3, $4, $5)
	`
	db.QueryRow(sqlStatement, id + 1, ticketData.Title, ticketData.Content, ticketData.Status, ticketData.Author)
	return nil
}