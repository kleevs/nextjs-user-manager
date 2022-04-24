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

const store = typeof localStorage !== 'undefined' && localStorage || null;

// function load(): UserAccount[] {
//     const data = store?.getItem("users");
//     const users: UserAccount[] = data && (JSON.parse(data || '') || []).map(_ => ({..._, birthdate: new Date(_.birthdate)})) || [];
//     return users;
// }

// function save(users: UserAccount[]) {
//     store?.setItem("users", JSON.stringify(users));
// }

export type UsersStore = {
    getUsers: () => UserAccount[];
    saveUsers: (users: UserAccount[]) => void;
}

export function saveUser(store: UsersStore, user: UserAccount) { 
    let errors: UserError = {};
    if (!user.password) {
        errors = { ...errors, passwordError: 'Renseigner un mot de passe' };
    }
    if (!user.login) {
        errors = { ...errors, loginError: 'Renseigner un login' };
    }
    if (!user.birthdate) {
        errors = { ...errors, birthdateError: 'Date de naissance invalide' };
    }
    if (!user.lastName) {
        errors = { ...errors, lastNameError: 'Renseigner un nom de famille' };
    }
    if (!user.firstName) {
        errors = { ...errors, firstNameError: 'Renseigner un prénom' };
    }
    if (
        errors.passwordError || errors.lastNameError || errors.birthdateError ||
        errors.firstNameError || errors.loginError
    ) {
        throw errors;
    }

    const users = store.getUsers();
    const stored = users.filter(_ => _.id === user.id)[0];
    const id = stored?.id ||  Math.max(...users.map(_ => _.id), 0) + 1;
    const result = users.filter(_ => _.id !== user.id).concat([{
        id: id,
        lastName: user.lastName,
        firstName: user.firstName,
        birthdate: user.birthdate,
        login: stored?.login || user.login,
        isActif: user.isActif,
        password: stored?.password || user.password
    }]);
    store.saveUsers(result);

    return id;
}

export function removeUser(store: UsersStore, id: number) {
    const users = store.getUsers();
    const result = users.filter(_ => _.id !== id);
    store.saveUsers(result);
}

export function getUsers(store: UsersStore) { 
    return store.getUsers();
}

export function getUser(store: UsersStore, id: number) { 
    const users = store.getUsers();
    return users.filter(_ => _.id === id)[0];
}
