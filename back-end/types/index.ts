type Role = 'admin' | 'user';

type ProfileInput = {
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
    profile: ProfileInput;
};

type ImageInput = {
    id?: number;
    path: string; 
    altText: string
}

type EventInput = {
    id?: number;
    name: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    capacity: number;
    ticketsSold: number;
    summary: string;
    description: string;
    images: ImageInput[];
}


export {
    Role,
    UserInput,
    ProfileInput,
    ImageInput,
    EventInput
};
