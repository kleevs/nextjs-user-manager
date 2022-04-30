import { UserAccount } from "../common/type";

export interface UserError {
    readonly lastNameError?: string;
    readonly firstNameError?: string;
    readonly birthdateError?: string;
    readonly loginError?: string;
    readonly passwordError?: string;
}

export type PageDetailData = {
    href: string;
    users: UserAccount[];
}