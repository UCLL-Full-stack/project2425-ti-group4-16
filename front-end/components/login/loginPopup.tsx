import React, { useState } from 'react';
import userService from '@/service/UserService'; 
import { User } from '@/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: User) => void;  
}

const LoginPopup: React.FC<Props> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  
    const { user, error } = await userService.login(username, password); 

    if (user) {
      console.log('Login successful, user:', user);
      setError(null); 
      onLoginSuccess(user);
      onClose(); 
    } else if (error) {
      console.error('Login failed with error:', error); 
      setError(error); 
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative z-1000 fixed">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-4">Log in</h2>

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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded p-2 w-full"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-stone-700 text-white p-2 rounded mb-4 hover:bg-stone-600">
            Submit
          </button>

          {/* Display error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Sign-up Link */}
          <div className="text-center">
            <p className="inline-block mr-1">Still have no account?</p>
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
