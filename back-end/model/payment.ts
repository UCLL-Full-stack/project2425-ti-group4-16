import { Payment as PaymentPrisma, Ticket as TicketPrisma, TicketType as TicketTypePrisma } from '@prisma/client';
import { Ticket } from './ticket';

export class Payment {
    private id?: number;
    private numOfTicket: number;
    private amount: number;
    private status: string;
    private date: Date;
    private tickets: Ticket[];

    constructor(payment: { id?: number; status: string; date: Date; tickets: Ticket[] }) {
        this.validate(payment);
        this.id = payment.id;
        this.numOfTicket = payment.tickets.length;
        this.amount = this.setAmount(payment.tickets);
        this.status = payment.status;
        this.date = payment.date;
        this.tickets = payment.tickets;
    }

    setAmount(tickets: Ticket[]): number {
        return tickets.reduce((total, ticket) => total + ticket.getTicketType().getPrice(), 0);
    }

    getId(): number | undefined {
        return this.id;
    }

    getNumOfTicket(): number {
        return this.numOfTicket;
    }

    getAmount(): number {
        return this.amount;
    }

    getStatus(): string {
        return this.status;
    }

    getDate(): Date {
        return this.date;
    }

    getTickets(): Ticket[] {
        return this.tickets;
    }

    validate(payment: { status: string; date: Date; tickets: Ticket[] }) {
        if (!payment.status?.trim()) {
            throw new Error('Status is required');
        }
        if (!payment.date) {
            throw new Error('Date is required');
        }
        if (!payment.tickets || payment.tickets.length === 0) {
            throw new Error('Tickets are required');
        }
    }

    equals(payment: Payment): boolean {
        return (
            this.numOfTicket === payment.getNumOfTicket() &&
            this.amount === payment.getAmount() &&
            this.status === payment.getStatus() &&
            this.date.getTime() === payment.getDate().getTime() && // Compare Date objects correctly
            JSON.stringify(this.tickets) === JSON.stringify(payment.getTickets())
        );
    }

    static from({
        id,
        numOfTickets,
        amount,
        status,
        date,
        tickets,
    }:PaymentPrisma & {
      tickets: (TicketPrisma & { ticketType: TicketTypePrisma })[]
    }){
        return new Payment({
            id,
            status,
            date,
            tickets: tickets.map((ticket)=> Ticket.from(ticket))
        })
    }
}
