import { Profile } from "../model/profile";
import { User } from "../model/user";
import { Role } from '../types';
import database from "./database";

const getAllUsers = async (): Promise<User[]> => {
    try {
        const usersPrisma = await database.user.findMany({
            include: {
                profile: true,
                invoices: {
                    include: {
                        tickets: {
                            include: {
                                ticketType: true,
                            },
                        },
                    },
                },
            },
        });

        return usersPrisma.map((userPrisma) => User.from(userPrisma));
    } catch (error) {
        console.error("Error fetching users from database:", error);
        throw new Error("Database error. See server log for details.");
    }
};

const getUserById = async ({ id }: { id: number }): Promise<User | null> => {
    try {
        const userPrisma = await database.user.findUnique({
            where: { id },
            include: {
                profile: true,
                invoices: {
                    include: {
                        tickets: {
                            include: {
                                ticketType: true,
                            },
                        },
                    },
                },
            },
        });

        if (!userPrisma?.profile) {
            console.warn(`User with ID ${id} is missing a profile.`);
            return null;
        }

        return User.from(userPrisma);
    } catch (error) {
        console.error("Error fetching user by ID:", id, error);
        throw new Error('Database error. See server log for details.');
    }
};

const getUserByUsername = async ({ username }: { username: string }): Promise<User | null> => {
    try {
        const userPrisma = await database.user.findFirst({
            where: { username },
            include: {
                profile: true,
                invoices: {
                    include: {
                        tickets: {
                            include: {
                                ticketType: true,
                            },
                        },
                    },
                },
            },
        });

        if (!userPrisma?.profile) {
            console.warn(`User with username ${username} is missing a profile.`);
            return null;
        }

        return User.from(userPrisma);
    } catch (error) {
        console.error("Error fetching user by username:", username, error);
        throw new Error('Database error. See server log for details.');
    }
};

const createUser = async (user: User): Promise<User> => {
    try {
        const userPrisma = await database.user.create({
            data: {
                username: user.getUsername(),
                password: user.getPassword(),
                role: user.getRole(),
                profile: {
                    create:{
                        firstName: user.getProfile().getFirstName(),
                        lastName: user.getProfile().getLastName(),
                        email: user.getProfile().getEmail(),
                        phoneNumber: user.getProfile().getPhoneNumber(),
                        birthDate: user.getProfile().getBirthDate()
                    }
                },
            },
            include: {
                profile: true,
                invoices: {
                    include: {
                        tickets: {
                            include: {
                                ticketType: true,
                            },
                        },
                    },
                },
            },
        });

        return User.from(userPrisma);
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Database error. Unable to create user. See server log for details.");
    }
};


export default {
    getAllUsers,
    getUserById,
    getUserByUsername,
    createUser
};
