type Role = 'admin' | 'user' | 'guest';

type Profile = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    birthDate: string;
};

type UserInput = {
    id?: number;
    username: string;
    password: string;
    role: Role;
    profile: Profile;
};

export {
    Role,
    UserInput,
    Profile,
};
