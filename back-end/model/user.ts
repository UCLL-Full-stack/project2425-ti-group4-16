import { Role } from '../types';
import { Payment } from './payment';
import { Profile } from './profile';
import { User as userPrisma, Profile as ProfilePrisma, Payment as PaymentPrisma } from '@prisma/client';


export class User {
    private id?: number;
    private username: string;
    private password: string;
    private role: Role;
    private profile: Profile;
    private invoices?: Payment[]; 

    constructor(user: {
        id?: number;
        username: string;
        password: string;
        role: Role;
        profile: Profile;
        invoices?: Payment[];
    }) {
        this.validate(user);
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.role = user.role;
        this.profile = user.profile; 
        this.invoices = user.invoices ||[];
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

    getInvoices(): Payment[] | undefined{
        return this.invoices;
    }

    isAdmin(): boolean {
        return this.role === 'admin';
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

    static from({
        id,
        username,
        password,
        profile,
        role,
    }: userPrisma & {
        profile: ProfilePrisma;
    }) {
        return new User({
            id,
            username,
            password,
            role: role as Role,
            profile: Profile.from(profile),
        });
    }
    
}
