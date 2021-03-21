export interface User {
    id: number;
    lastName: string;
    firstName: string;
    birthdate: Date;
    login: string;
    isActif: boolean;
}

export interface Account {
    password: string;
}

export type UserAccount = User & Account;

export interface UserError {
    lastNameError?: string;
    firstNameError?: string;
    birthdateError?: string;
    loginError?: string;
    passwordError?: string;
}