import { Role } from '../types';
import { Payment } from './payment';
import { Profile } from './profile';
import { 
    User as UserPrisma, 
    Profile as ProfilePrisma, 
    Payment as PaymentPrisma, 
    Ticket as TicketPrisma, 
    TicketType as TicketTypePrisma 
} from '@prisma/client';

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
        this.invoices = user.invoices || [];
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

    getInvoices(): Payment[] | undefined {
        return this.invoices;
    }

    isAdmin(): boolean {
        return this.role === 'ADMIN';
    }

    validate(user: {
        username: string;
        password: string;
        role: Role;
        profile: Profile;
    }) {
        if (!user.username?.trim()) {
            throw new Error('Username is required.');
        }
        if (user.username.length < 3) {
            throw new Error('Username must be at least 3 characters long.');
        }
        if (!user.password?.trim()) {
            throw new Error('Password is required.');
        }
        if (!user.role) {
            throw new Error('Role is required.');
        }
        if (!user.profile) {
            throw new Error('Profile information is required.');
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
        invoices,
    }: UserPrisma & {
        profile: ProfilePrisma | null;
        invoices: (PaymentPrisma & { tickets: (TicketPrisma & { ticketType: TicketTypePrisma })[] })[];
    }): User {
        if (!profile) {
            throw new Error(`User with ID ${id} is missing a profile.`);
        }


        return new User({
            id,
            username,
            password,
            role: role as Role,
            profile: Profile.from(profile),
            invoices: invoices.map((payment) => Payment.from(payment)),
        });
    }
}
