import React from 'react';

const SignupForm: React.FC = () => {
  return (
    <div className="flex  justify-center min-h-screen bg-gray-100 h-[calc(100vh-96px)]">
      <form action="" className="grid grid-cols-2 gap-x-4 p-10 rounded shadow-lg bg-white w-full max-w-3xl opacity-90 ">
        <h2 className="col-span-2 text-xl font-bold text-center">Sign Up</h2>
        
        {/* First Name Field */}
        <div className='h-12'>
          <label htmlFor="first-name" className="block text-sm font-medium">First Name</label>
          <input 
            type="text" 
            id="first-name" 
            className="border border-gray-300 rounded p-2 w-full" 
            required 
            placeholder="Your first name"
          />
        </div>

        {/* Last Name Field */}
        <div className='h-12'>
          <label htmlFor="last-name" className="block text-sm font-medium">Last Name</label>
          <input 
            type="text" 
            id="last-name" 
            className="border border-gray-300 rounded p-2 w-full" 
            required 
            placeholder="Your last name"
          />
        </div>


        {/* Phone Number Field */}
        <div  className='h-12'>
          <label htmlFor="phone-number" className="block text-sm font-medium">Phone Number</label>
          <input 
            type="tel" 
            id="phone-number" 
            className="border border-gray-300 rounded p-2 w-full" 
            required 
            placeholder="0123-45-67-89"
          />
        </div>

        {/* Birth Date Field */}
        <div className='h-12'>
          <label htmlFor="birth-date" className="block text-sm font-medium">Birth Date</label>
          <input 
            type="date" 
            id="birth-date" 
            className="border border-gray-300 rounded p-2 w-full" 
            required 
          />
        </div>

        {/* Email Field */}
        <div className="col-span-2 h-12">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input 
            type="email" 
            id="email" 
            className="border border-gray-300 rounded p-2 w-full" 
            required 
            placeholder="example@example.com"
          />
        </div>

        {/* Username Field */}
        <div className='h-12'>
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input 
            type="text" 
            id="username" 
            className="border border-gray-300 rounded p-2 w-full" 
            required 
            placeholder="Your username"
          />
        </div>
        
        {/* Password Field */}
        <div className='h-12'>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input 
            type="password" 
            id="password" 
            className="border border-gray-300 rounded p-2 w-full" 
            required 
            placeholder="Password"
          />
        </div>

        {/* Submit Button - spans full width */}
        <div className="col-span-2 h-12">
          <button type="submit" className="w-full bg-stone-700 text-white p-2 rounded mt-2">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
