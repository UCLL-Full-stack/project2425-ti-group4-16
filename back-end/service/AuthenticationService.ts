import { User } from "../model/user";

export class AuthenticationService {
    private users: User[]; // This array simulates a user database

    constructor(users: User[]) {
        this.users = users;
    }

    authenticate(username: string, password: string): { user?: User; error?: string } {
        const user = this.users.find((user) => user.getUsername() === username);
    
        if (!user) {
            return { error: 'User not found' };
        }
    
        if (user.getPassword() !== password) {
            return { error: 'Incorrect password' };
        }
    
        return { user };
    }
}
