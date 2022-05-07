import { UserError, PageDetailData } from "../type";
import { get, post, Store } from 'lib';
import { UserAccount, DetailLocation } from "../../common/actions";

export async function saveUser(store: Store<PageDetailData>, user: UserAccount) { 
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

    const { user: stored } = store.getValue();
    const result = {
        id: stored?.id || 0,
        lastName: user.lastName,
        firstName: user.firstName,
        birthdate: user.birthdate,
        login: stored?.login || user.login,
        isActif: user.isActif,
        password: stored?.password || user.password
    };

    const id = await post<number, UserAccount>(`/api/users/${result.id}`, result);
    const newValue = await get<UserAccount>(`/api/users/${id}`);
    store.update({...store.getValue(), user: newValue, href: DetailLocation(id) });

    return id;
}