package model

type TicketData struct {
	Title string `json:"title" form:"title" query:"title"`
	Content  string `json:"content" form:"content" query:"content"`
	Status string `json:"status" form:"status" query:"status"`
	Author string `json:"author" form:"author" query:"author"`
}