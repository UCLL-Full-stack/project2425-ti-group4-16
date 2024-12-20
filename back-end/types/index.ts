type Role = "USER" | "ADMIN";

type ProfileInput = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    birthDate: string;
};

type TicketTypeInput={
    id?: number;
    name: string;
    price: number;
}

type TicketInput ={
    id?: number;
    purchasedOn: dateFns;
    ticketType: TicketTypeInput;
}

type PaymentInput = {
    id?: number;
    status: string;
    date: Date; 
    tickets: TicketInput[]
};

type UserInput = {
    id?: number;
    username: string;
    password: string;
    role: Role;
    profile: ProfileInput;
    invoices?: PaymentInput[]; 
};
type ImageInput = {
    id?: number;
    path: string; 
    altText: string
}

type CategoryClassInput={
    id?: number;
    name: string;
    color: string;
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
    categories: CategoryClassInput[];
    images: ImageInput[];
    ticketTypes: TicketTypeInput[];
    tickets: TicketInput[];
}


type AuthenticationResponse = {
    token: string;
    username: string;
    fullname: string;
    role: string;
};



export {
    Role,
    UserInput,
    ProfileInput,
    ImageInput,
    EventInput,
    AuthenticationResponse
};
