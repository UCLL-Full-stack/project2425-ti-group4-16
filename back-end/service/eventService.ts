import eventDb from "../repository/event.db";
import { Event } from "../model/event";
import { EventInput } from "../types";
import { CategoryClass } from "../model/categoryClass";
import { Image } from "../model/image";
import { TicketType } from "../model/ticketType";
import { Ticket } from "../model/ticket";

const getAllEvents = async (): Promise<Event[]> => eventDb.getAllEvents();

const getEventsById = async (id: number): Promise<Event> =>{
    const event = await eventDb.getEventById({ id });
    if (!event) throw new Error(`Event with id ${id} does not exist.`);
    return event;
}

// const createEvent = async ({
//     name,
//     date,
//     startTime,
//     endTime,
//     location,
//     capacity,
//     ticketsSold,
//     summary,
//     description,
//     categories: CategoryInput,   
//     images: ImageInput,  
//     ticketTypes: TicketTypeInput, 
//     tickets: TicketInput,   
// }: EventInput): Promise<Event> => {

//     const categories = CategoryInput.map((category) => new CategoryClass(category));
//     const images = ImageInput.map((image) => new Image(image));
//     const ticketTypes = TicketTypeInput.map((ticketType) => new TicketType(ticketType));
//     const tickets = TicketInput.map((ticket) => new Ticket(ticket));

//     const eventToCreate = new Event({
//         name,
//         date,
//         startTime,
//         endTime,
//         location,
//         capacity,
//         ticketsSold,
//         summary,
//         description,
//         categories,
//         images,
//         ticketTypes,
//         tickets,
//     });

//     // Save event to the database
//     return await eventDb.createEvent(eventToCreate);
// };



export default{
    getAllEvents,
    getEventsById
}
