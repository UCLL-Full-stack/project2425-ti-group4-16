import { TicketType as ticketTypePrisma } from '@prisma/client';


export class TicketType {
    private id? : number;
    private name: string;
    private price: number;

    constructor(ticket:{id? : number; name: string; price: number;}){
        this.validate(ticket);
        this.id = ticket.id;
        this.name = ticket.name;
        this.price = ticket.price;
    }

    getId(): number | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number{
        return this.price;
    }

    validate(ticketType: {
        name: string;
        price: number;

    }) {
        if (!ticketType.name?.trim()) {
            throw new Error('ticket Type is required');
        }

    }

    equals(ticketType: TicketType): boolean {
        return (
            this.name === ticketType.getName() &&
            this.price === ticketType.getPrice()
        );
    }

    static from({ id, name, price }: ticketTypePrisma): TicketType {
        return new TicketType({
            id,
            name,
            price
        });
    }

}    