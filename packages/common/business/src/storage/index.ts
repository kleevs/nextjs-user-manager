interface User {
    readonly id: number;
    readonly lastName?: string;
    readonly firstName?: string;
    readonly birthdate?: Date;
    readonly login?: string;
    readonly isActif?: boolean;
}

interface Account {
    readonly password?: string;
}

type UserAccount = User & Account;

const store = typeof localStorage !== 'undefined' && localStorage || null;

export function load(): UserAccount[] {
    const data = store?.getItem("users");
    const users: UserAccount[] = data && (JSON.parse(data || '') || []).map(_ => ({..._, birthdate: new Date(_.birthdate)})) || [];
    return users;
}

export function save(users: UserAccount[]) {
    store?.setItem("users", JSON.stringify(users));
}