import { Store } from 'lib';

export type HttpGet = <T>(uri: string) => Promise<T>;
export type HttpPost = <T, TData>(uri: string, data: TData) => Promise<T>;
export type HttpRemove = <T>(uri: string) => Promise<T>;

export interface User {
    readonly id: number;
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

export type AppContext = {
    uri: {
        home: string;
        detail: string;
    },
    moveTo: (href: string) => void;
}

export type ListPageContext = AppContext & {
    users: Store<UserAccount[]>;
}

export type DetailPageContext = AppContext & {
    user: Store<UserAccount>;
}