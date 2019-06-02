export enum Status {
    WAITING,
    DOING,
    DONE
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

    constructor(status: Status, ticketId: number) {
        this.ticketId = ticketId;
        this.title = 'Vill ha möjlighet att styra mätarinstrument från lokaliseringsbyggnaden';
        this.content = 'Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.';
        this.status = status;
        this.author = 'Martin Andersen';
        this.createdAt = new Date ();
        this.modifiedAt = new Date ();
        const hours = this.modifiedAt.getHours() < 10 ? '0' + this.modifiedAt.getHours() : this.modifiedAt.getHours();
        const minutes = this.modifiedAt.getMinutes() < 10 ? '0' + this.modifiedAt.getMinutes() : this.modifiedAt.getMinutes();
        this.modifiedAtStr = this.modifiedAt.toISOString().slice(0, 10) + ' ' + hours + ':' + minutes;
    }
}
