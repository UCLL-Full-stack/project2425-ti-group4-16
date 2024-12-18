
import { User } from '@/types'; 

const login = async (username: string, password: string): Promise<{ user?: User; error?: string }> => {
    try {
        const response = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            return { error: data.error || 'Login failed' };
        }

        // Return the data directly as `user` since `data` is the user object
        return { user: data };
    } catch (error) {
        console.error('Error during login:', error);
        return { error: 'An error occurred. Please try again.' };
    }
};

const UserService = {
    login
};

export default UserService;
