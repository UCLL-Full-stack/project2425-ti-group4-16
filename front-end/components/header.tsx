import Link from 'next/link';
import "font-awesome/css/font-awesome.min.css";
import LoginPopup from './login/loginPopup';
import { useState, useEffect } from 'react';
import { User } from '@/types';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const [logonWindowOpen, setLoginWindowOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [userRole, setUserRole] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = sessionStorage.getItem('loggedInUser');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const handleLoginClick = () => setLoginWindowOpen(true);
    const handleCloseModal = () => setLoginWindowOpen(false);

    const handleLoginSuccess = (user: User) => {
        setCurrentUser(user);
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        setIsLoggedIn(true);
        setLoginWindowOpen(false);
    };

    const handleLogout = () => {
        setCurrentUser(null);
        sessionStorage.removeItem('loggedInUser');
        setIsLoggedIn(false);
        router.push('/');
    };

    return (
        <header className="sticky top-0 w-full bg-zinc-800 bg-gradient shadow-md z-50 p-3">
            <div className="flex items-center justify-between">
                {/* Left: Login/Logout Button or Hamburger Menu */}
                <div className="flex items-center ml-5">
                    {!isLoggedIn ? (
                        <button
                            onClick={handleLoginClick}
                            className="button-animated w-28 h-12 flex items-center justify-center gap-2 rounded-full text-white bg-gradient-to-r from-yellow-500 to-orange-700 hover:bg-gray-700 text-lg"
                        >
                            <i className="fa fa-user"></i>
                            <span>Log in</span>
                        </button>
                    ) : (
                        <div className="relative">
                            {/* Hamburger Menu */}
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="button-animated w-28 h-12 flex items-center justify-between rounded-full text-white bg-gradient-to-r from-yellow-500 to-orange-700 hover:bg-gray-700 text-lg"
                            >
                                <img src="/images/avatar.png" alt="user avatar"  className='w-12'/>
                                <i className="fa fa-bars"></i>
                                
                            </button>

                            {/* Dropdown Menu */}
                            {menuOpen && (
                                <div className="absolute left-0 mt-1 w-48 bg-white text-black rounded shadow-lg z-50">
                                    <ul className="py-2">
                                        <li
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => router.push('/users/profile')}
                                        >
                                            Profile
                                        </li>
                                        {currentUser?.role=="ADMIN" && (
                                            <li
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => router.push('/events/createEvents')}
                                            >
                                                Create events
                                            </li>
                                        )}
                                        <li
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Center: Logo */}
                <Link href="/" className="flex-grow flex justify-center">
                    <img src="/images/logo1.png" className="max-h-20" alt="Evently logo" />
                </Link>

                {/* Right: Contact Button */}
                <div className="flex items-center mr-5">
                    <a href="mailto:your-email@example.com" className="button-animated w-28 h-12 flex items-center justify-center gap-2 rounded-full text-white border p-2">
                        <i className="fa fa-envelope"></i>
                        <span>Contact</span>
                    </a>
                </div>
            </div>

            {/* Login Modal */}
            <LoginPopup
                isOpen={logonWindowOpen}
                onClose={handleCloseModal}
                onLoginSuccess={handleLoginSuccess}
            />
        </header>
    );
};

export default Header;
