import React, { useState } from 'react';
import { mockBackend } from '@/service/MockBackendService';
import { User } from '../../../back-end/model/user';

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { user, error } = mockBackend.authenticate(username, password); // Destructure the return value

        if (user) {
            setError(null);
            onLoginSuccess(user); // Pass the user object directly
            onClose(); // Close the popup on successful login
        } else if (error) {
            setError(error); // Set error state from the returned error message
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96 relative">
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    aria-label="Close"
                >
                    &times; {/* This will render as an 'X' */}
                </button>

                <h2 className="text-lg font-semibold mb-4">Log in</h2>

                {/* Login form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            className="border border-gray-300 rounded p-2 w-full" 
                            required 
                            placeholder="your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // Update state
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="border border-gray-300 rounded p-2 w-full" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update state
                        />
                    </div>
                    <button type="submit" className="w-full bg-stone-700 text-white p-2 rounded mb-4">Submit</button>

                    {/* Display error message */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* Sign-up Link */}
                    <div className="text-center">
                        <p className="inline-block mr-1">Still have no account?</p>
                        <a 
                            href="/signup" 
                            className="text-blue-500 hover:underline"
                        >
                            Sign up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
