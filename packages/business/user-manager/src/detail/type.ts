import { UserAccount, PageData } from "../common/actions";

export interface UserError {
    readonly lastNameError?: string;
    readonly firstNameError?: string;
    readonly birthdateError?: string;
    readonly loginError?: string;
    readonly passwordError?: string;
}

export type PageDetailData = PageData & {
    user: UserAccount;
}