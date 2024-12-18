import { Role } from '../types';
import { Profile } from './profile';

export class User {
    private id?: number;
    private username: string;
    private password: string;
    private role: Role;
    private profile: Profile; 

    constructor(user: {
        id?: number;
        username: string;
        password: string;
        role: Role;
        profile: Profile
    }) {
        this.validate(user);
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.role = user.role;
        this.profile = user.profile; 
    }

    getId(): number | undefined {
        return this.id;
    }

    getUsername(): string {
        return this.username;
    }

    getPassword(): string {
        return this.password;
    }

    getRole(): Role {
        return this.role;
    }

    getProfile(): Profile {
        return this.profile; 
    }

    validate(user: {
        username: string;
        password: string;
        role: Role;
        profile: Profile;
    }) {
        if (!user.username?.trim()) {
            throw new Error('Username is required');
        }
        if (!user.password?.trim()) {
            throw new Error('Password is required');
        }
        if (!user.role) {
            throw new Error('Role is required');
        }
        if (!user.profile) {
            throw new Error('Profile information is required');
        }
    }

    equals(user: User): boolean {
        return (
            this.username === user.getUsername() &&
            this.password === user.getPassword() &&
            this.role === user.getRole() &&
            this.profile.equals(user.getProfile())
        );
    }
}
