import { Component, OnInit } from '@angular/core';
import { Ticket, Status } from './ticket';
import { TicketService } from '../../api/ticket.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  waitingList: Ticket[] = [];
  doingList: Ticket[] = [];
  doneList: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getTickets().subscribe(response => {
      for (const ticket of response) {
        this.addToLists(ticket);
      }
    });
  }

  addToLists(ticket: Ticket) {
    if (ticket.status === Status.WAITING) {
      this.waitingList.push(ticket);
    }
    if (ticket.status === Status.DOING) {
      this.doingList.push(ticket);
    }
    if (ticket.status === Status.DONE) {
      this.doneList.push(ticket);
    }
  }
}
