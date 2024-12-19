import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import EventCard from "@/components/eventSearch/eventCards";
import EventService from "@/service/EventService";
import { Event } from "@/types";
import SearchFilter from "@/components/eventSearch/searchSection";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    name: '',
    category: '',
    location: '',
    date: '',
  });

  const handleSearch = (searchFilters: {
    name: string;
    category: string;
    location: string;
    date: string;
  }) => {
    setFilters(searchFilters); 
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await EventService.getAllEvents();
        const data = await response.json();
        setEvents(data); 
        console.log(data)
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const isSameDate = (eventDate: string, filterDate: string) => {
    const [eventDay, eventMonth, eventYear] = eventDate.split('-');
    const [filterYear, filterMonth, filterDay] = filterDate.split('-');
    return (
      eventDay === filterDay &&
      eventMonth === filterMonth &&
      eventYear === filterYear
    );
  };

  const filteredEvents = events.filter((event) => {
    return (
      (filters.name === '' || event.name?.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.category === '' || event.categories?.some(category => category.name.toLowerCase().includes(filters.category.toLowerCase()))) &&
      (filters.location === '' || event.location?.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.date === '' || (event.date && isSameDate(event.date, filters.date)))
    );
  });
  

  return (
    <>
      <Head>
        <title>Evently-home</title>
        <meta name="description" content="Evently app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="p-4 flex">
        {/* Search Section */}
        <div className="w-1/4 p-4">
          <SearchFilter onSearch={handleSearch} />
        </div>

        {/* Event List Section */}
        <div className="w-3/4 p-4">
          <h2 className="text-xl font-bold mb-3">Upcoming Events</h2>
          {loading ? (
            <p>Loading events...</p>
          ) : (
            <EventCard events={filteredEvents} />
          )}
        </div>
      </main>
    </>
  );
}
