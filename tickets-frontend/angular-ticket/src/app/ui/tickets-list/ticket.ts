export enum Status {
    WAITING = 'WAITING',
    DOING = 'DOING',
    DONE = 'DONE'
}

export class Ticket {
    ticketId: number;
    title: string;
    content: string;
    status: Status;
    author: string;
    createdAt: Date;
    modifiedAt: Date;
    modifiedAtStr: string;

    constructor() { }

    static fromResponse(response: object): Ticket {
        const ticket = new Ticket();
        ticket.ticketId = response['ticket_id'];
        ticket.title = response['title'];
        ticket.content = response['content'];
        const statStr: string = response['status'].toUpperCase();
        ticket.status = Status[statStr];
        ticket.author = response['author'];
        ticket.createdAt = new Date(response['created_at']);
        ticket.modifiedAt = new Date(response['modified_at']);
        const hours = ticket.modifiedAt.getHours() < 10 ? '0' + ticket.modifiedAt.getHours() : ticket.modifiedAt.getHours();
        const minutes = ticket.modifiedAt.getMinutes() < 10 ? '0' + ticket.modifiedAt.getMinutes() : ticket.modifiedAt.getMinutes();
        ticket.modifiedAtStr = ticket.modifiedAt.toISOString().slice(0, 10) + ' ' + hours + ':' + minutes;
        return ticket;
    }
}
