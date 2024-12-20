import { User } from "../model/user";
import bcrypt from 'bcrypt';
import userDB from "../repository/user.db";
import { generateJwtToken } from "../util/jwt";
import { UserInput } from "../types";
import { Profile } from "../model/profile";
import { AuthenticationResponse } from "../types";

const getAllUsers = async (): Promise<User[]> => userDB.getAllUsers();

const getUserByUsername = async ({ username }: { username: string }): Promise<User> => {
    const user = await userDB.getUserByUsername({ username });
    if (!user) {
        throw new Error(`User with username: ${username} does not exist.`);
    }
    return user;
    
};

const createUser = async ({
    username,
    password,
    role,
    profile: ProfileInput,     
    }: UserInput): Promise<User> => {

    const existingUser = await userDB.getUserByUsername({ username });
    if (existingUser) {
        throw new Error(`User with username: ${username} already exists.`);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const profile = new Profile(ProfileInput);  

    const userToCreate = new User({
        username,
        role,
        profile,  
        password: hashedPassword,       
    });

    return await userDB.createUser(userToCreate);
};

// export class UserAuthentication {
//     authenticate(username: string, password: string): { user?: UserInput; error?: string } {
//         const existingUser = userDB.getUserByUsername({username})
//         if (!existingUser) {
//             return { error: "User not found" };
//         }

//         if (existingUser.password !== password) {
//             return { error: "Incorrect password" };
//         }

//         // Return authenticated user
//         return { user };
//     }
// }



const authenticate = async ({ username, password }: UserInput): Promise<AuthenticationResponse> => {
    const existingUser = await getUserByUsername({ username });
    
    if (!existingUser) {
        throw new Error('Login failed');
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.getPassword());
    
    if (!isValidPassword) {
        throw new Error('Login failed');
    }

    const role = existingUser.getRole();

    return {
        token: generateJwtToken({ username, role }),
        username: username,
        fullname: `${existingUser.getProfile().getFirstName()} ${existingUser.getProfile().getLastName()}`,
        role: role,
    };
};



export default {getAllUsers, getUserByUsername, createUser, authenticate};
