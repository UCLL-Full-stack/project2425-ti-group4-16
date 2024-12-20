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

const createEvent = async ({
    event,
}: {
    event: Event;  
}): Promise<Event> => {
    try {
        const eventPrisma = await database.event.create({
            data: {
                name: event.getName(),
                date: event.getDate(),
                startTime: event.getStartTime(),
                endTime: event.getEndTime(),
                location: event.getLocation(),
                capacity: event.getCapacity(),
                ticketsSold: event.getTicketSold(),
                summary: event.getSummary(),
                description: event.getDescription(),
                categories: {
                    connect: event.getCategories().map((category) => ({ id: category.getId() })),
                },
                images: {
                    connect: event.getImages().map((image) => ({ id: image.getId() })),
                },
                ticketTypes: {
                    connect: event.getTicketTypes().map((ticketType) => ({ id: ticketType.getId() })),
                },
                tickets: {
                    connect: event.getTickets()?.map((ticket) => ({
                        id: ticket.getId(),
                        ticketTypeId: ticket.getTicketType().getId(),
                    })) || [],
                },
            },
            include: {
                categories: true,
                images: true,
                ticketTypes: true,
                tickets: {
                    include: {
                        ticketType: true,
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
    createEvent
};
