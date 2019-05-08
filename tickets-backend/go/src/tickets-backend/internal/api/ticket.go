package api

import "time"

type Ticket struct {
	TicketId   int64  `json:"ticket_id" db:"ticket_id"`
	Title      string `json:"title"`
	Content    string `json:"content"`
	Status     string `json:"status"`
	Author     string `json:"author"`
	CreatedAt  time.Time `json:"created_at" db:"created_at"`
	ModifiedAt time.Time `json:"modified_at" db:"modified_at"`
}
