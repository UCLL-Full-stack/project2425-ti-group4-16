import { useRouter } from "next/router";
import useEventDetails from "@/components/eventSearch/useEventDetails";
import Head from "next/head";
import Header from "@/components/header";
import ConfirmationPage from "@/components/payment/confirmationPage";
import React from "react";

const Confirmation: React.FC = () => {
  const router = useRouter();
  const { eventId, ticketType, numOfTickets, ticketPrice, totalPrice } = router.query;
  const { event, error, loading } = useEventDetails(eventId);

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
            {loading && !event && <p>Loading ticket details...</p>}
            {event && <ConfirmationPage
              event={event}
              ticketType={ticketType}
              numOfTickets={numOfTickets}
              ticketPrice={ticketPrice}
              totalPrice={totalPrice}
             />}
        </div>    
      </main>
    </>
  );
};

export default Confirmation;
