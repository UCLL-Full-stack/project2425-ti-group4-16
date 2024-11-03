
// import { User } from "../../back-end/model/user";

// class MockBackendService {
//     private users: User[] = [];

//     constructor() {
//         this.users.push(new User({
//             id: 1,
//             username: 'user1',
//             password: 'pass1',
//             role: 'user',
//             profile: {
//                 firstName: 'John',
//                 lastName: 'Doe',
//                 email: 'john.doe@example.com',
//                 phoneNumber: '123-456-7890',
//                 birthDate: '1990-01-01',
//             },
//         }));
//     }

//     authenticate(username: string, password: string): { user?: User; error?: string } {
//         const user = this.users.find((user) => user.getUsername() === username);

//         if (!user) {
//             return { error: 'User not found' };
//         }

//         if (user.getPassword() !== password) {
//             return { error: 'Incorrect password' };
//         }

//         return { user };
//     }
// }

// export const mockBackend = new MockBackendService();
