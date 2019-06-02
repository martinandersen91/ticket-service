import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../tickets-list/ticket';

@Component({
  selector: 'app-ticket-thumb',
  templateUrl: './ticket-thumb.component.html',
  styleUrls: ['./ticket-thumb.component.css']
})
export class TicketThumbComponent implements OnInit {

  @Input() ticketList: Ticket[];
  @Input () statusType: string;

  constructor() { }

  ngOnInit() {
  }

}
