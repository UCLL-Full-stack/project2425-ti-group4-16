export type Role = 'ADMIN'|'USER';

export type Profile = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  birthDate?: string;
};

export type User = {
  id?: number;
  username?: string;
  password?: string;
  role?: Role;
  profile?: Profile;
};

export type Image = {
  id?: number;
  path?: string; 
  altText?: string 
}

export type CategoryClass ={
  id?: number;
  name: string;
  color: string;
}


export type TicketType ={
  id?: number;
  name: string;
  price: number;
}

export type Ticket ={
  id?: number;
  purchasedOn: Date;
  ticketType: TicketType;
}


export type Event = {
  id?: number;
  name?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  capacity?: number;
  ticketsSold?: number;
  summary?: string;
  description?: string;
  categories?: CategoryClass[];
  images?: Image[];
  ticketTypes?: TicketType[];
  tickets?: Ticket[];
}

export type StatusMessage = {
  message: string;
  type: "error" | "success";
};

export type LoggedUser = {
    
  fullname: string,
  role: Role,
  token: string,
  username: string
  }