import { UserAccount, UserError, Store, PageListData } from "./type";

export function saveUser(store: Store<PageListData>, user: UserAccount) { 
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

    const { users } = store.getValue();
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
    store.update({...store.getValue(), users: result });

    return id;
}

export function removeUser(store: Store<PageListData>, id: number) {
    const { users } = store.getValue();
    const result = users.filter(_ => _.id !== id);
    store.update({...store.getValue(), users: result });
}