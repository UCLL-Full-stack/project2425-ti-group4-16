import { useState } from "react";

type ContactFormProps = {
    isOpen: boolean;
    onClose: () => void;
};

const ContactForm:React.FC<ContactFormProps> = ({ isOpen, onClose}) => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit= () =>{
        setFormSubmitted(true);
    }

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000">
      <div className="bg-white p-6 rounded shadow-lg w-[32rem] relative z-1000 fixed">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-4">Contact form</h2>

        {/* Login form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 rounded p-2 w-full"
              required
              placeholder="your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              className="border border-gray-300 rounded p-2 w-full h-20"
              required
            />
          </div>
          <button type="submit" className="w-full bg-stone-700 text-white p-2 rounded mb-4 hover:bg-[#75246b]">
            Submit
          </button>
          {formSubmitted && (
            <div className="text-green-800">Form successfully submitted!</div>
          )}

        </form>
      </div>
      
    </div>

    )
};

export default ContactForm;
