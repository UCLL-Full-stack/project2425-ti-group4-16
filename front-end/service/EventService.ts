const getAllEvents = async () => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
  };

const getEventById = async (eventId: string) =>{
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      throw new Error(`Error fetching event with ID ${eventId}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error; 
  }
}


  const EventService = {
    getAllEvents,
    getEventById

  };
  
  export default EventService;