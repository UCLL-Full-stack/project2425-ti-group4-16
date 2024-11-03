export type Role = 'admin' | 'user' | 'guest';

export type Profile = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  birthDate?: string;
};

export type User = {
  id?: number;
  username: string;
  password: string;
  role: Role;
  profile: Profile;
};