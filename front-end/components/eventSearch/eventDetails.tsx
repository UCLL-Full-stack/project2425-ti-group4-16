import React, { useState } from "react";
import { EventImages } from "./eventImages";
import { Event } from "@/types";
import { LikeButton } from "./eventImages";
import { CategoryClass } from "@/types";
import Router from "next/router";

type EventDetailsContentProps = {
  event: Event;
};

const EventDetailsContent: React.FC<EventDetailsContentProps> = ({ event }) => {
  const [numOfTickets, setNumOfTickets] = useState<number>(1)
  const [ticketPrice, setTicketPrice] = useState<number>(0)
  const [selectedTicketType, setSelectedTicketType] = useState<string>('')

  const handleTicketChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTicketType = e.target.value;

    const selectedTicket = event.ticketTypes?.find(
      (ticketType) => ticketType.name === selectedTicketType
    );

    setTicketPrice(selectedTicket ? selectedTicket.price : 0);
    setSelectedTicketType(selectedTicketType);
  };

  const handleClick = () => {
    if (!ticketPrice) {
      alert("Please select a ticket type.");
      return;
    }

    Router.push({
      pathname: `/confirmation/${event.id}`,
      query: {
        eventId: event.id,
        ticketType: selectedTicketType,
        numOfTickets,
        ticketPrice,
        totalPrice: ticketPrice * numOfTickets,
      },
    });
  };

  return (
    <div className="flex flex-col justify-center w-3/4 border px-5 py-4 rounded-lg shadow-md bg-white">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <EventImages images={event.images} />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col">
            <div className="grid grid-cols-9">
                <div className="col-span-7">
                  <ul className="grid grid-cols-2 pl-0">
                      <li className="pb-2">
                          <a href="#" className="no-underline flex items-center justify-center gap-2 bg-[#2a66b3] border border-[#2a66b3] text-white rounded-lg h-10 w-28 hover:bg-[#082b58] hover:border-[#082b58]">
                              <i className="fa fa-facebook" aria-hidden="true"></i>Facebook
                          </a>
                      </li>
                      <li>
                          <a href="#" className="no-underline flex items-center justify-center gap-2 bg-[#35bbec] border border-[#35bbec] text-white rounded-lg h-10 w-28 hover:bg-[#0f607e] hover:border-[#0f607e]">
                              <i className="fa fa-twitter" aria-hidden="true"></i>Twitter
                          </a>
                      </li>
                      <li>
                          <a href="#" className="no-underline flex items-center justify-center gap-2 bg-[#e55644] border border-[#e55644] text-white rounded-lg h-10 w-28 hover:bg-[#a52a1b] hover:border-[#a52a1b]">
                              <i className="fa fa-google-plus" aria-hidden="true"></i>Google
                          </a>
                      </li>
                      <li>
                          <a href="#" className="no-underline flex items-center justify-center gap-2 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] border-[#e4405f]  text-white rounded-lg h-10 w-28 hover:saturate-50 hover:border-[#b93c4b]">
                              <i className="fa fa-instagram" aria-hidden="true"></i>Instagram
                          </a>
                      </li>
                  </ul>
                </div>
                <div className="col-span-2 ">
                  <LikeButton/>
                </div>
            </div>
            <div className=" bg-stone-200 rounded p-4">
              <div className="flex gap-2 mb-2">
                <img src="/images/calendar.png" className="max-h-8" alt="date logo" />
                <p className="text-gray-800">Date: {event.date} </p>
              </div>
              <div className="flex gap-2 mb-2">
                <img src="/images/time.png" className="max-h-8" alt="Time logo" />
                <p className="text-gray-800">Time: {event.startTime} - {event.endTime}</p>
              </div>
              <div className="flex gap-2 mb-2">
                <img src="/images/location.png" className="max-h-8" alt="Location logo" />
                <p className="text-gray-800">Location: {event.location}</p>
              </div>
              <div className="flex gap-2 mb-2">
                <img src="/images/price.png" className="max-h-8" alt="price logo" />
                <p className="text-gray-800">Ticket price:</p>
                <p>
                  {!event.ticketTypes || event.ticketTypes.length === 0
                    ? "Free entrance"
                    : `From €${Math.min(...event.ticketTypes.map((ticket) => ticket.price)).toFixed(2)}`}
                </p>
              </div>

              <div className="flex items-center gap-1">
                {event.categories?.map((category: CategoryClass, index: number) => {
                  return (
                    <span
                      key={index}
                      className={`px-1 py-1 rounded text-gray-800 ${category.color}`}
                    >
                      {category.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
         
          
        </div>
        
      </div>
      <div className="flex mt-4 gap-3">
        <div className="w-2/3">
          <h1 className="text-2xl font-bold ">{event.name}</h1>
          <p className="text-gray-700">{event.description}</p>
        </div>
        <div className="flex-1 bg-[#43403f] text-white rounded p-4">
          <h4 className="mb-3">Register for this event</h4>
          <div className="flex flex-col mb-2">
            
            <select  id="ticketType" className="text-black text-center content-center" onChange={handleTicketChange}>
              <option>Ticket type</option>
              {event.ticketTypes?.map((ticketType) => {
                return <option className= ""key={ticketType.name} value={ticketType.name}>{ticketType.name}</option>;
              })}

            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="nuOfTickets " className="mb-2" >number of tickets</label>
            <input type="number" className="text-black text-center" id="numOfTickets" min={0} value={numOfTickets}
            onChange={(e) => setNumOfTickets(parseInt(e.target.value))} />
          </div>
          <div className="flex justify-between">
            <p>Sub total</p>
            <p className="text-xl pr-2">€ {ticketPrice * numOfTickets}</p>
          </div>
          <button
           onClick={handleClick}
           key={event.id}
           className="button-animated w-full flex items-center justify-center rounded text-white bg-gradient-to-r from-yellow-500 to-orange-700 hover:bg-gray-700 text-lg">
            Book ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsContent;