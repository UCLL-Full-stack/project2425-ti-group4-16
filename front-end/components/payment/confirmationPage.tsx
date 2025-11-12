import { Event } from "@/types";

type ConfirmationPageProps = {
    event: Event;
    ticketType: string | string[] | undefined; 
    numOfTickets: string | string[] | undefined;
    ticketPrice: string | string[] | undefined;
    totalPrice: string | string[] | undefined;
  };
  
  const ConfirmationPage: React.FC<ConfirmationPageProps> = ({   
    event,
    ticketType,
    numOfTickets,
    ticketPrice,
    totalPrice, }) => {

        const handlePaymentSubmit = (e: React.FormEvent) => {
            e.preventDefault();

            alert("Thank you for your booking!");
          };

    return(
        <div className="flex w-3/4 pt-3 gap-4">
            <div className="flex w-1/3 justify-center flex-col gap-3">
                <div className=" bg-stone-200 rounded p-4">
                    <h2 >{event.name}</h2>
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
                </div> 
                <div className="border rounded p-4">
                    <h2>Your order details</h2>
                    <div className="flex justify-between">
                        <p>Ticket type</p>
                        <p>{ticketType}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Ticket price</p>
                        <p>€ {ticketPrice}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Number of tickets</p>
                        <p>{numOfTickets}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-xl font-bold">Total</p>
                        <p className="text-xl font-bold">€ {totalPrice}</p>
                    </div>
                </div>   
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <form onSubmit={handlePaymentSubmit} className="flex flex-col gap-4">
                    {/* Name on Card */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold">
                        Name on Card
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border rounded px-3 py-2 mt-1"
                        placeholder="Enter your name"
                        required
                        />
                    </div>

                    {/* Card Number */}
                    <div>
                        <label htmlFor="cardNumber" className="block text-gray-700 font-semibold">
                        Card Number
                        </label>
                        <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        className="w-full border rounded px-3 py-2 mt-1"
                        placeholder="1234 5678 9012 3456"
                        maxLength={16}
                        pattern="\d{16}"
                        required
                        />
                    </div>

                    {/* Expiry Date */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                        <label htmlFor="expiryDate" className="block text-gray-700 font-semibold">
                            Expiry Date
                        </label>
                        <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            className="w-full border rounded px-3 py-2 mt-1"
                            placeholder="MM/YY"
                            pattern="\d{2}/\d{2}"
                            required
                        />
                        </div>

                        {/* CVV */}
                        <div className="w-1/2">
                        <label htmlFor="cvv" className="block text-gray-700 font-semibold">
                            CVV
                        </label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            className="w-full border rounded px-3 py-2 mt-1"
                            placeholder="123"
                            maxLength={3}
                            pattern="\d{3}"
                            required
                        />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="button-animated w-full flex items-center justify-center rounded text-white bg-gradient-to-r from-yellow-500 to-orange-700 hover:bg-[#75246b] text-lg">
                        Book ticket €{totalPrice}
                    </button>
                </form>
            </div>
        </div>

    )
  }
  export default ConfirmationPage;