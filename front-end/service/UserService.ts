
import { User } from '@/types'; 

const loginUser = (user: User) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
};

const signupUser = async (user: User) => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        // Check if response is successful
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Something went wrong!');
        }

        const data = await response.json();
        return data; // Return the created user data
    } catch (error) {
        console.error("Error signing up:", error);
        throw error; // Propagate the error to handle it in your UI
    }
};


const getAllUsers = async () => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
  };



const UserService = {
    loginUser,
    signupUser,
    getAllUsers
};

export default UserService;
