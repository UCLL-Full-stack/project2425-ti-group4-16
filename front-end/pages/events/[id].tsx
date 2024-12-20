import React from "react";
import Head from "next/head";
import Header from "@/components/header";
import { useRouter } from "next/router";
import useEventDetails from "@/components/eventSearch/useEventDetails";
import EventDetailsContent from "@/components/eventSearch/eventDetails";

const EventDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { event, error, loading } = useEventDetails(id);

  return (
    <>
      <Head>
        <title>Evently - {event?.name || "Loading..."}</title>
        <meta name="description" content="Evently app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex justify-center">
          {error && <p>{error}</p>}
          {loading && !event && <p>Loading event details...</p>}
          {event && <EventDetailsContent event={event} />}
        </div>
      </main>
    </>
  );
};

export default EventDetails;
