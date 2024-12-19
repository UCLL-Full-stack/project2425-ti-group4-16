import { Category } from "../model/category";
import { Event } from "../model/event";
import { Image } from "../model/image";
import { Ticket } from "../model/ticket";
import { CategoryClass } from "../model/categoryClass";
import database from "./database";

const getAllEvents = async (): Promise<Event[]> => {
    try {
        const eventPrisma = await database.event.findMany({
            include: {
                categories: true,     
                images: true,         
                ticketTypes: true,    
                tickets: {
                    include: {
                        ticketType : true
                    },
                },         
            },
        });
        return eventPrisma.map((eventPrisma) => Event.from(eventPrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getEventById = async ({ id }: { id: number }): Promise<Event | null> => {
    try{
        const eventPrisma = await database.event.findUnique({
            where: {id},
            include: { 
                categories: true,     
                images: true,         
                ticketTypes: true,    
                tickets: {
                    include: {
                        ticketType : true
                    },
                },  
            }    
        })
        if(!eventPrisma){
            return null
        }
        return Event.from(eventPrisma);
    }
    catch(error){
        console.error(error);
        throw new Error('Databese error. see server lgo for details.');
    }
}

const addEvent = async ({
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
}: {
    name: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    capacity: number;
    ticketsSold: number;
    summary: string;
    description: string;
    categories: { id: number }[];
    images: { id: number }[];
    ticketTypes: { id: number }[];
    tickets: { id: number; ticketTypeId: number }[];  // Include ticketTypeId in tickets
}): Promise<Event> => {
    try {
        const eventPrisma = await database.event.create({
            data: {
                name,
                date,
                startTime,
                endTime,
                location,
                capacity,
                ticketsSold,
                summary,
                description,
                categories: {
                    connect: categories.map((category) => ({ id: category.id })),
                },
                images: {
                    connect: images.map((image) => ({ id: image.id })),
                },
                ticketTypes: {
                    connect: ticketTypes.map((ticketType) => ({ id: ticketType.id })),
                },
                tickets: {
                    connect: tickets.map((ticket) => ({ id: ticket.id })),
                },
            },
            include: {
                categories: true,
                images: true,
                ticketTypes: true,
                tickets: {
                    include: {
                        ticketType : true
                    },
                },  
            },
        });

        return Event.from(eventPrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};



export default {
    getAllEvents,
    getEventById,
    addEvent
};
