declare interface User {
    id: number;
    lastName: string;
    firstName: string;
    birthdate: Date;
    login: string;
    isActif: boolean;
}

declare interface Account {
    password: string;
}

declare interface UserError {
    lastNameError?: string;
    firstNameError?: string;
    birthdateError?: string;
    loginError?: string;
    passwordError?: string;
}