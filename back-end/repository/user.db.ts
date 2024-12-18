import { Profile } from "../model/profile";
import { User } from "../model/user";
import { Role } from '../types';

const users: User[] = [
    new User({ 
        id: 1,
        username: 'admin1',
        password: 'adminpass',
        role: 'admin',
        profile: new Profile({
            firstName: 'Alice',
            lastName: 'Anderson',
            email: 'alice.admin@example.com',
            phoneNumber: '123-456-7890',
            birthDate: '1985-06-12'
        })
    }),
    new User({ 
        id: 2,
        username: 'user1',
        password: 'userpass1',
        role: 'user',
        profile: new Profile({
            firstName: 'Bob',
            lastName: 'Brown',
            email: 'bob.user@example.com',
            phoneNumber: '987-654-3210',
            birthDate: '1990-01-20'
        })
    }),
    new User({ 
        id: 3,
        username: 'admin',
        password: 'adminnn',
        role: 'admin',
        profile: new Profile({
            firstName: 'Carol',
            lastName: 'Clark',
            email: 'carol.user@example.com',
            phoneNumber: '555-555-5555',
            birthDate: '1992-03-15'
        })
    }),
    new User({ 
        id: 4,
        username: 'guest1',
        password: 'guestpass',
        role: 'user',
        profile: new Profile({
            firstName: 'David',
            lastName: 'Doe',
            email: 'david.guest@example.com',
            phoneNumber: '444-444-4444',
            birthDate: '1995-07-22'
        })
    })
];

export { users };
