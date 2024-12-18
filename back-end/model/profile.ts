
export class Profile {
    private firstName: string;
    private lastName: string;
    private email: string;
    private phoneNumber: string;
    private birthDate: string;

    constructor(profile: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        birthDate: string;
    }) {
        this.validate(profile);
        this.firstName = profile.firstName;
        this.lastName = profile.lastName;
        this.email = profile.email;
        this.phoneNumber = profile.phoneNumber;
        this.birthDate = profile.birthDate;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getEmail(): string {
        return this.email;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    getBirthDate(): string {
        return this.birthDate;
    }

    validate(profile: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        birthDate: string;
    }) {
        if (!profile.firstName?.trim()) {
            throw new Error('First name is required');
        }
        if (!profile.lastName?.trim()) {
            throw new Error('Last name is required');
        }
        if (!profile.email?.trim()) {
            throw new Error('Email is required');
        }
        if (!profile.phoneNumber?.trim()) {
            throw new Error('Phone number is required');
        }
        if (!profile.birthDate?.trim()) {
            throw new Error('Birth date is required');
        }
    }

    equals(profile: Profile): boolean{
        return(
            this.firstName === profile.getFirstName() &&
            this.lastName === profile.getLastName() &&
            this.email == profile.getEmail() &&
            this.phoneNumber == profile.getPhoneNumber() &&
            this.birthDate == profile.getPhoneNumber() 
        )
    }
}
