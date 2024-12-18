import { Ticket } from "./ticket";

export class Payment{
    private id? : number;
    private numOfTicket: number;
    private amount: number;
    private status: string;
    private date: Date;
    private tickets: Ticket[];

    constructor(payment:{id? : number; numOfTicket: number; amount: number; status: string; date: Date; tickets: Ticket[]}){
        this.validate(payment);
        this.id = payment.id;
        this.numOfTicket = payment.tickets.length;
        this.amount = payment.amount;
        this.status = payment.status;
        this.date = payment.date;
        this.tickets = payment.tickets;

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
    
    getTickets(): Ticket[]{
        return this.tickets;
    }

    validate(payment: {
        numOfTicket: number;
        amount: number;
        status: string;
        date: Date;
        tickets: Ticket[];

    }) {
        if (!payment.status?.trim()) {
            throw new Error('status is required');
        }
        if (!payment.date) {
            throw new Error('Date is required');
        }
        if (!payment.numOfTicket && payment.numOfTicket !== 0) {
            throw new Error('price is required');
        }
        if (!payment.amount && payment.amount !== 0) {
            throw new Error('Amount is required');
        }
        if(!payment.tickets || payment.tickets.length == 0){
            throw new Error ('Tickets are required')
        }
    }

    equals(payment: Payment): boolean {
        return (
            this.numOfTicket === payment.getNumOfTicket() &&
            this.amount === payment.getAmount() &&
            this.status === payment.getStatus() &&
            this.date === payment.getDate() &&
            this.tickets === payment.getTickets()
        );
    }
}