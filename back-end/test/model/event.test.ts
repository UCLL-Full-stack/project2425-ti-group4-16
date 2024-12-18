import { Event } from "../../model/event";
import { Image } from "../../model/image";

const image1 = new Image({ path: '/eventImages/summerFestival.jpg', altText: 'Summer Music Festival image' });
const name = 'Summer Music Festival';
const date = '2025-06-15';
const startTime = '18:00';
const endTime = '00:00';
const location = 'Brussels, Belgium';
const capacity = 5000;
const ticketsSold = 3800;
const summary = 'Enjoy a night of smooth jazz performances by top local and international artists.'
const description = 'Jazz Night Live in Ghent is a celebration of timeless music and extraordinary talent.'



test('given: valid values for event, when: event is created, then: event is created with those values', () => {
    // given

    // when
    const event = new Event({ 
        name: name,
        date: date,
        startTime: startTime, 
        endTime: endTime,
        location: location,
        capacity: capacity,
        ticketsSold: ticketsSold,
        summary: summary,
        description: description,
        images: [image1]});

    // then
    expect(event.getName()).toEqual(name);
    expect(event.getDate()).toEqual(date);
    expect(event.getStartTime()).toEqual(startTime);
    expect(event.getEndTime()).toEqual(endTime);
    expect(event.getLocation()).toEqual(location);
    expect(event.getCapacity()).toEqual(capacity);
    expect(event.getTicketSold()).toEqual(ticketsSold);
    expect(event.getSummary()).toEqual(summary);
    expect(event.getDescription()).toEqual(description);
    expect(event.getImages()).toContain(image1);
});

test('given: invalid startTme for event, when: event is created, then: event throws an error', () => {
    // given

    // when
    const event = () =>{
        new Event({ 
            name: name,
            date: date,
            startTime: '', 
            endTime: endTime,
            location: location,
            capacity: capacity,
            ticketsSold: ticketsSold,
            summary: summary,
            description: description,
            images: [image1]});
    }

    // then
    expect(event).toThrow('Start time is required');
});

test('given: invalid name for event, when: event is created, then: event throws an error', () => {
    // given
    const date = "2024-12-17";
    const startTime = "10:00";
    const endTime = "12:00";
    const location = "Some Location";
    const capacity = 100;
    const ticketsSold = 50;
    const summary = "Some Summary";
    const description = "Some Description";
    const image1 = new Image({ path: '/eventImages/summerFestival.jpg', altText: 'Summer Music Festival image' });
    const invalidEvent = {
        name: "",
        date: date,
        startTime: startTime,
        endTime: endTime,
        location: location,
        capacity: capacity,
        ticketsSold: ticketsSold,
        summary: summary,
        description: description,
        images: [image1],
    };

    // when and then
    expect(() => new Event(invalidEvent)).toThrow('Name is required');
});
