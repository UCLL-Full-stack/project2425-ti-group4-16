import React, { useState } from 'react';
import userService from '@/service/UserService'; 
import { User } from '@/types';
import { useRouter } from 'next/router';
import { StatusMessage } from '@/types';
import UsersTable from '../Users/createTable';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: User) => void;  
}

const LoginPopup: React.FC<Props> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);
  const router = useRouter();

  if (!isOpen) return null;

  const clearErrors = () => {
    setNameError(null);
    setPasswordError(null);
    setStatusMessages([]);
  };

  const validate = (): boolean => {
    let result = true;

    if (!name.trim()) {
      setNameError("login.validate.name"); 
      result = false;
    }

    if (!password.trim()) {
      setPasswordError("login.validate.password"); 
      result = false;
    }

    return result;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    clearErrors();

    if (!validate()) {
      return;
    }

    const user = { username: name, password };
    const response = await userService.loginUser(user);
    
    if (response.status === 200) {
      setStatusMessages([
        {
          message: "login.success", 
          type: "success",
        },
      ]);

      const userData = await response.json();
      sessionStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          token: userData.token,
          fullname: userData.fullname,
          username: userData.username,
          role: userData.role
        })
      );

      setTimeout(() => {
        if (router.pathname === '/') {
            window.location.reload();
        } else {
            router.push('/');
        }
    }, 1000);

    } else if (response.status === 401) {
      const { errorMessage } = await response.json();
      setStatusMessages([
        {
          message: errorMessage,
          type: "error",
        },
      ]);
    } else {
      setStatusMessages([
        {
          message: "Login failed, please try again", 
          type: "error",
        },
      ]);
    }
  } 

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
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            {nameError && <div className="text-red-800">{nameError}</div>}
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
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordError && (
              <div className="text-red-800">{passwordError}</div>
            )}
          </div>
          <button type="submit" className="w-full bg-stone-700 text-white p-2 rounded mb-4 hover:bg-[#75246b]">
            Submit
          </button>

          {/* Sign-up Link */}
          <div className="text-center">
            <p className="inline-block mr-1">Still have no account?</p>
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </div>
        </form>

        {/* Display status message */}
        {statusMessages.length > 0 && (
          <div
            className={`mt-4 p-4 ${statusMessages[0].type === 'success' ? 'bg-green-200' : 'bg-red-200'}`}
            role="alert"
          >
            {statusMessages[0].message}
          </div>
        )}
        <UsersTable/>
      </div>
      
    </div>
  );
};

export default LoginPopup;
