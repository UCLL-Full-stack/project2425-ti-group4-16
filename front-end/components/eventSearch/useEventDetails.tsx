import { useState, useEffect } from "react";
import { Event } from "@/types";
import EventService from "@/service/EventService";

const useEventDetails = (id: string | string[] | undefined) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      if (id) {
        try {
          setLoading(true);
          const fetchedEvent = await EventService.getEventById(id as string);
          setEvent(fetchedEvent);
        } catch (err) {
          setError("Failed to fetch event details.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchEvent();
  }, [id]);

  return { event, error, loading };
};

export default useEventDetails;
