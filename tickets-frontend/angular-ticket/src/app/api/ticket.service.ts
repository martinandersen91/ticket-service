import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../ui/tickets-list/ticket';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get('http://localhost:8000/api/tickets/').pipe(
      map(response => {
        const listOfTickets: Ticket[] = [];
        if (response) {
          for (const ticket in response) {
            if (!response.hasOwnProperty(ticket)) {
              continue;
            }

            const ticketInfo = Ticket.fromResponse(response[ticket]);
            listOfTickets.push(ticketInfo);
          }
        }
        return listOfTickets;
      })
    );
  }

  insertTicket(title: string, content: string, status: string, author: string) {
    let params = new HttpParams();
    params = params.set('title', title);
    params = params.set('content', content);
    params = params.set('status', status);
    params = params.set('author', author);
    this.http.post('http://localhost:8000/api/tickets/insert', params).subscribe();
  }
}
