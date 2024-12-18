import { User } from "../model/user";
import { users } from "../repository/user.db";

export class UserAuthentication {
    authenticate(username: string, password: string): { user?: User; error?: string } {
        // Find user by username
        const user = users.find((u) => u.getUsername() === username);

        if (!user) {
            return { error: "User not found" };
        }

        // Check if password matches
        if (user.getPassword() !== password) {
            return { error: "Incorrect password" };
        }

        // Return authenticated user
        return { user };
    }
}

// Exporting the class directly for easier import
export default UserAuthentication;
