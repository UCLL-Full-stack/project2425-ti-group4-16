import React, { useState } from 'react';
import { Event } from '@/types';
import router from 'next/router';
import { CategoryClass } from '@/types';


const EventCard: React.FC<{ events: Array<Event> }> = ({ events }) => {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
        {events.map((event, index) => (
          <EventItem key={index} event={event} />
        ))}
      </div>
    );
};


const EventItem: React.FC<{ event: Event }> = ({ event }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (event.images?.length || 1) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (event.images?.length || 1) - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLike = () => {
    setIsLiked((prevLiked) => !prevLiked);
  };

  return (
    <div 
        key={event.id}
        className="border p-4 rounded-lg shadow-md bg-white" 
        onClick={() => router.push(`/events/${event.id}`)}>
      <div className="relative">
        {event.images && event.images.length > 0 ? (
          <>
            <img
              src={event.images[currentImageIndex]?.path || '/placeholder.jpg'}
              alt={event.images[currentImageIndex]?.altText || 'Event image'}
              className="w-full h-48 object-cover rounded"
            />
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full focus:outline-none"
            >
              ◀
            </button>
            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full focus:outline-none"
            >
              ▶
            </button>
          </>
        ) : (
          <img
            src="/placeholder.jpg"
            alt="No images available"
            className="w-full h-48 object-cover rounded"
          />
        )}
      </div>

      {/* Event Information */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
        <p className="mt-2 text-gray-800">{event.summary}</p>
        <div className="mt-2 text-gray-600">
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <div className="flex flex-wrap items-center gap-2">
            {event.categories?.map((category: CategoryClass, index: number) => {
              return (
                <span
                  key={index}
                  className={`px-2 py-1 rounded text-sm text-gray-800 ${category.color}`}
                >
                  {category.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Like Button */}
      <div className="flex justify-end top-2 right-2">
        <button
          onClick={handleLike}
          className={`text-xl ${isLiked ? 'text-red-600' : 'text-gray-600'}`}
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
