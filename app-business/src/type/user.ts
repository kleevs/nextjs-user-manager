export interface User {
    readonly id?: number;
    readonly lastName?: string;
    readonly firstName?: string;
    readonly birthdate?: Date;
    readonly login?: string;
    readonly isActif?: boolean;
}

export interface Account {
    readonly password?: string;
}

export type UserAccount = User & Account;

export interface UserError {
    readonly lastNameError?: string;
    readonly firstNameError?: string;
    readonly birthdateError?: string;
    readonly loginError?: string;
    readonly passwordError?: string;
}