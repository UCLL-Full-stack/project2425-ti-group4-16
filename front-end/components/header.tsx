import Link from 'next/link';
import "font-awesome/css/font-awesome.min.css";
import LoginPopup from './login/loginPopup';
import { useState } from 'react';
import { User } from '../../back-end/model/user';
import Router from 'next/router';

const Header: React.FC = () => {
    const [logonWindowOpen, setLoginWindowOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null); // To store the logged-in user

    const handleLoginClick = () => {
        setLoginWindowOpen(true);
    };
  
    const handleCloseModal = () => {
        setLoginWindowOpen(false);
    };

    const handleLoginSuccess = (user: User) => {
        setCurrentUser(user);
        Router.push('/dashboard'); // Redirect to the dashboard or any other page
    };

    return (
        <header className="bg-zinc-800 bg-gradient shadow-md sticky">
            <div className="flex items-center justify-between">
                {/* Log in Link on the Left */}
                <div className="flex-row items-center ml-5">
                    <button 
                        onClick={handleLoginClick} 
                        className="w-28 h-12 flex items-center justify-center no-underline gap-2 border-none rounded-r-full rounded-l-full p-2 text-white bg-gradient-to-r from-yellow-500 to-orange-700 hover:bg-gray-700 text-lg"
                    >
                        <i className="fa fa-user"></i>
                        <span>Log in</span>
                    </button>
                </div>
                
                {/* Centered Logo */}
                <Link href="/" className="flex-grow flex justify-center">
                    <img src="/images/logo1.png" className="max-h-24" alt="Evently logo" />
                </Link>

                {/* Contact Button on the Right */}
                <div className="flex items-center mr-5">
                    <a href="mailto:your-email@example.com" className="w-28 h-12 flex items-center justify-center no-underline rounded-r-full rounded-l-full gap-2 border p-2 text-white hover:bg-zinc-600">
                        <i className="fa fa-envelope"></i>
                        <span>Contact</span>
                    </a>
                </div>
            </div>

            {/* LoginPopup */}
            <LoginPopup 
                isOpen={logonWindowOpen} 
                onClose={handleCloseModal} 
                onLoginSuccess={handleLoginSuccess} // Pass the login success handler
            />
        </header>
    );
};

export default Header;
