import { Component, OnInit } from '@angular/core';
import { Status } from '../tickets-list/ticket';
import { NgForm } from '@angular/forms';
import { TicketService } from '../../api/ticket.service';

@Component({
  selector: 'app-create-new-ticket',
  templateUrl: './create-new-ticket.component.html',
  styleUrls: ['./create-new-ticket.component.css']
})
export class CreateNewTicketComponent implements OnInit {

  statuses: string[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.statuses.push(Status.WAITING);
    this.statuses.push(Status.DOING);
    this.statuses.push(Status.DONE);
  }

  onSubmit(form: NgForm) {
    this.ticketService.insertTicket(form.value.title, form.value.content, form.value.status, form.value.author);
    form.reset();
  }
}
