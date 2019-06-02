import { Component, OnInit } from '@angular/core';
import { Ticket, Status } from './ticket';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {

  waitingList: Ticket[] = [];
  doingList: Ticket[] = [];
  doneList: Ticket[] = [];

  constructor() { }

  ngOnInit() {
      let i = 0;
      this.waitingList.push(new Ticket(Status.WAITING, i++));
      this.waitingList.push(new Ticket(Status.WAITING, i++));
      this.waitingList.push(new Ticket(Status.WAITING, i++));
      this.waitingList.push(new Ticket(Status.WAITING, i++));
      this.waitingList.push(new Ticket(Status.WAITING, i++));
      this.waitingList.push(new Ticket(Status.WAITING, i++));
      this.waitingList.push(new Ticket(Status.WAITING, i++));
      this.waitingList.push(new Ticket(Status.WAITING, i++));
      this.waitingList.push(new Ticket(Status.WAITING, i++));

      this.doingList.push(new Ticket(Status.DOING, i++));
      this.doingList.push(new Ticket(Status.DOING, i++));
      this.doingList.push(new Ticket(Status.DOING, i++));
      this.doingList.push(new Ticket(Status.DOING, i++));

      this.doneList.push(new Ticket(Status.DONE, i++));
      this.doneList.push(new Ticket(Status.DONE, i++));
      this.doneList.push(new Ticket(Status.DONE, i++));
      this.doneList.push(new Ticket(Status.DONE, i++));
      this.doneList.push(new Ticket(Status.DONE, i++));
      this.doneList.push(new Ticket(Status.DONE, i++));
      this.doneList.push(new Ticket(Status.DONE, i++));
  }
}
