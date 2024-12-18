import eventDb from "../repository/event.db";
import { Event } from "../model/event";


const getAllEvents = async (): Promise<Event[]> => eventDb.getAllEvents();

const getEventsById = async (id: number): Promise<Event> =>{
    const event = await eventDb.getEventById({ id });
    if (!event) throw new Error(`Event with id ${id} does not exist.`);
    return event;
}



export default{
    getAllEvents,
    getEventsById
}
