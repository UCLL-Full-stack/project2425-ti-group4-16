import { TicketType } from "./ticketType";
import { TicketType as ticketTypePrisma, Ticket as ticketPrisma } from '@prisma/client';

export class Ticket {
    private id? : number;
    private purchasedOn : Date;
    private ticketType: TicketType

    constructor(ticket:{id? : number; purchasedOn : Date; ticketType: TicketType}){
        this.validate(ticket);
        this.id = ticket.id;
        this.purchasedOn = ticket.purchasedOn;
        this.ticketType = ticket.ticketType;
    }

    getId(): number | undefined {
        return this.id;
    }

    getPurchasedOn(): Date{
        return this.purchasedOn;
    }

    getTicketType(): TicketType {
        return this.ticketType;
    }

    validate(ticket: {
        ticketType: TicketType;
        purchasedOn: Date;

    }) {
        if (!ticket.ticketType) {
            throw new Error('ticket type is required');
        }
        if (!ticket.purchasedOn) {
            throw new Error('purchase data is required');
        }
    }

    equals(ticket: Ticket): boolean {
        return (
            this.ticketType === ticket.getTicketType() &&
            this.purchasedOn === ticket.getPurchasedOn()
        );
    }

    static from({ id, purchasedOn, ticketType }: ticketPrisma& {ticketType: ticketTypePrisma}){
        return new Ticket({
            id,
            purchasedOn,
            ticketType: TicketType.from(ticketType),
        });
    }

}    