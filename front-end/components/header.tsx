import Link from 'next/link';
import "font-awesome/css/font-awesome.min.css";
import LoginPopup from './login/loginPopup';
import { useState, useEffect } from 'react';
import { User } from '@/types';
import Router from 'next/router';

const Header: React.FC = () => {
    const [logonWindowOpen, setLoginWindowOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLoginClick = () => setLoginWindowOpen(true);
    const handleCloseModal = () => setLoginWindowOpen(false);

    const handleLoginSuccess = (user: User) => {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        Router.push('/dashboard');
    };

    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
        Router.push('/');
    };

    return (
        <header className="sticky top-0 w-full bg-zinc-800 bg-gradient shadow-md z-50 p-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center ml-5">
                    {!currentUser ? (
                        <button 
                            onClick={handleLoginClick} 
                            className="button-animated w-28 h-10 flex items-center justify-center gap-2 rounded-full text-white bg-gradient-to-r from-yellow-500 to-orange-700 hover:bg-gray-700 text-lg"
                        >
                            <i className="fa fa-user"></i>
                            <span>Log in</span>
                        </button>
                    ) : (
                        <button 
                            onClick={handleLogout} 
                            className="button-animated w-28 h-10 flex items-center justify-center gap-2 rounded-full text-white bg-gradient-to-r from-yellow-500 to-orange-700 hover:bg-gray-700 text-lg"
                        >
                            <i className="fa fa-sign-out"></i>
                            <span>Log out</span>
                        </button>
                    )}
                </div>

                <Link href="/" className="flex-grow flex justify-center">
                    <img src="/images/logo1.png" className="max-h-20" alt="Evently logo" />
                </Link>

                <div className="flex items-center mr-5">
                    <a href="mailto:your-email@example.com" className="button-animated w-28 h-10 flex items-center justify-center gap-2 rounded-full text-white border p-2">
                        <i className="fa fa-envelope"></i>
                        <span>Contact</span>
                    </a>
                </div>
            </div>

            <LoginPopup 
                isOpen={logonWindowOpen} 
                onClose={handleCloseModal} 
                onLoginSuccess={handleLoginSuccess}
            />
        </header>
    );
};

export default Header;
