export class Ticket {
    private id? : number;
    private ticketType: string;
    private price: number;

    constructor(ticket:{id? : number; ticketType: string; price: number;}){
        this.validate(ticket);
        this.id = ticket.id;
        this.ticketType = ticket.ticketType;
        this.price = ticket.price;
    }

    getId(): number | undefined {
        return this.id;
    }

    getTicketType(): string {
        return this.ticketType;
    }

    getPrice(): number{
        return this.price;
    }

    validate(ticket: {
        ticketType: string;
        price: number;

    }) {
        if (!ticket.ticketType?.trim()) {
            throw new Error('ticket Type is required');
        }
        if (!ticket.price && ticket.price !== 0) {
            throw new Error('price is required');
        }
    }

    equals(ticket: Ticket): boolean {
        return (
            this.ticketType === ticket.getTicketType() &&
            this.price === ticket.getPrice()
        );
    }

}    