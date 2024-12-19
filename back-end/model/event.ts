import { Category } from "./category";
import { CategoryClass } from "./categoryClass";
import { Image } from "./image";
import { Ticket } from "./ticket";
import { TicketType } from "./ticketType";
import {
  Event as eventPrisma,
  CategoryClass as categoryPrisma,
  Ticket as ticketPrisma,
  TicketType as ticketTypePrisma,
  Image as imagePrisma
} from '@prisma/client'

export class Event{
    private id?: number;
    private name: string;
    private date: string;
    private startTime: string;
    private endTime: string;
    private location: string;
    private capacity: number;
    private ticketsSold: number;
    private summary: string;
    private description: string;
    private categories: CategoryClass[];
    private images: Image[];
    private ticketTypes: TicketType[]; 
    private tickets?: Ticket[];

    constructor(event: {
        id?: number;
        name: string;
        date: string;
        startTime: string;
        endTime: string;
        location: string;
        capacity: number;
        ticketsSold: number;
        summary: string;
        description: string;
        categories: CategoryClass[];
        images: Image[];
        ticketTypes: TicketType[];
        tickets?: Ticket[];
    }){
        this.validate(event)
        this.id = event.id;
        this.name = event.name;
        this.date = event.date;
        this.startTime = event.startTime;
        this.endTime = event.endTime;
        this.location = event.location;
        this.capacity = event.capacity;
        this.ticketsSold = event.ticketsSold;
        this.summary = event.summary;
        this.description = event.description;
        this.categories = event.categories || [];
        this.images = event.images || [];
        this.ticketTypes = event.ticketTypes || [];
        this.tickets = event.tickets|| [];
    }

    getId(): number | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDate(): string {
        return this.date;
    }

    getStartTime(): string {
        return this.startTime;
    }

    getEndTime(): string {
        return this.endTime;
    }

    getLocation(): string{
        return this.location;
    }

    getCapacity(): number{
        return this.capacity;
    }

    getTicketSold(): number{
        return this.ticketsSold;
    }

    getSummary(): string{
        return this.summary;
    }

    getDescription(): string{
        return this.description;
    }

    getCategories(): CategoryClass[]{
      return this.categories;
    }

    getImages(): Image[]{
        return this.images;
    }

    getTicketTypes(): TicketType[]{
      return this.ticketTypes;
    }

    getTickets(): Ticket[] | undefined{
      return this.tickets;
    }

    validate(event: {
        name: string;
        date: string;
        startTime: string;
        endTime: string;
        location: string;
        capacity: number;
        ticketsSold: number;
        summary: string;
        description: string;
        categories: CategoryClass[];
        images: Image[];
        ticketTypes: TicketType[];
      }) {
        if (!event.name?.trim() || event.name === '') {
          throw new Error('Name is required');
        }
        if (!event.date?.trim()) {
          throw new Error('Date is required');
        }
        if (!event.startTime?.trim()) {
          throw new Error('Start time is required');
        }
        if (!event.endTime?.trim()) {
          throw new Error('End time is required');
        }
        if (!event.location?.trim()) {
          throw new Error('Location is required');
        }
        if (!event.capacity && event.capacity !== 0) {
          throw new Error('Capacity is required');
        }
        if (!event.ticketsSold && event.ticketsSold !== 0) {
          throw new Error('Number of tickets sold is required');
        }
        if (!event.summary?.trim()) {
          throw new Error('Summary is required');
        }
        if (!event.description?.trim()) {
          throw new Error('Description is required');
        }
        if(!event.categories){
          throw new Error('Category is required')
        }
        if (!event.images) {
          throw new Error('Images are required');
        }
        if (!event.ticketTypes) {
          throw new Error('Ticket type is required');
        }
    }

    equals(event: Event): boolean {
        return (
            this.name === event.getName() &&
            this.date === event.getDate() &&
            this.startTime === event.getStartTime() &&
            this.endTime === event.getEndTime() &&
            this.location === event.getLocation() &&
            this.capacity === event.getCapacity() &&
            this.ticketsSold === event.getTicketSold() &&
            this.summary === event.getSummary() &&
            this.description === event.getDescription() &&
            this.categories === event.getCategories()&&
            this.images === event.getImages() &&
            this.ticketTypes === event.getTicketTypes() &&
            this.tickets === event.getTickets()
        );
    }

    static from({
      id,
      name,
      date,
      startTime,
      endTime,
      location,
      capacity,
      ticketsSold,
      summary,
      description,
      categories,
      images,
      ticketTypes,
      tickets,
  }:eventPrisma & {
    categories : categoryPrisma[], 
    images: imagePrisma[], 
    ticketTypes:ticketTypePrisma[],
    tickets: (ticketPrisma & { ticketType: ticketTypePrisma })[]
  }){
      return new Event({
        id, 
        name, 
        date,
        startTime,
        endTime,
        location,
        capacity,
        ticketsSold,
        summary,
        description,
        categories: categories.map((category)=> CategoryClass.from(category)),
        images: images.map((image)=> Image.from(image)) ,
        ticketTypes: ticketTypes.map((ticketType)=> TicketType.from(ticketType)),
        tickets: tickets.map((ticket)=> Ticket.from(ticket))
      })
  }
  
}