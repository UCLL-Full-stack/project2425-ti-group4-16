import React, { useState } from 'react';

type EventImagesProps = {
  images?: Array<{ path?: string; altText?: string }>;
};

export const LikeButton: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className="flex justify-center  border rounded-full ">
      <button
        onClick={handleLike}
        className={`text-xl ${isLiked ? 'text-red-600' : 'text-gray-600'}`}
      >
        {isLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export const EventImages: React.FC<EventImagesProps> = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      {images.length > 0 ? (
        <>
          <img
            src={images[currentImageIndex]?.path || '/placeholder.jpg'}
            alt={images[currentImageIndex]?.altText || 'Event image'}
            className="w-full h-96 object-cover rounded"
          />
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full focus:outline-none"
          >
            ◀
          </button>
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
  );
};

