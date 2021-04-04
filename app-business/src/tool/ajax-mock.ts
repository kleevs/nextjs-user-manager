import { USER } from "../constant/url";
import { UserAccount } from "../type/user";

function load(): UserAccount[] {
    const data = localStorage.getItem("users");
    const users: UserAccount[] = data && (JSON.parse(data || '') || []).map(_ => ({..._, birthdate: new Date(_.birthdate)})) || [];
    return users;
}

function save(users: UserAccount[]) {
    localStorage.setItem("users", JSON.stringify(users));
}

export function saveUserPut(uri: string, user: UserAccount) {
    const users = load();
    var id = users.length+1;
    const errors = [];
    if (!user.password) {
        errors.push({ code: "PSSW", message: 'Renseigner un mot de passe' });
    }
    if (!user.login) {
        errors.push({ code: "LGN", message: 'Renseigner un login' });
    }
    if (!user.birthdate) {
        errors.push({ code: "BIRTH", message: 'Date de naissance invalide' });
    }
    if (!user.lastName) {
        errors.push({ code: "LSTN", message: 'Renseigner un nom de famille' });
    }
    if (!user.firstName) {
        errors.push({ code: "FRSN", message: 'Renseigner un prénom' });
    }
    if (errors.length > 0) {
        return Promise.reject(errors);
    }
    save(users.concat([{
        id,
        lastName: user.lastName,
        firstName: user.firstName,
        birthdate: user.birthdate,
        login: user.login,
        isActif: user.isActif,
        password: user.password
    }]));
    return Promise.resolve(id); 
}

export function saveUserPost(uri: string, user: UserAccount) {
    const users = load();
    const errors = [];
    if (!user.password) {
        errors.push({ code: "PSSW", message: 'Renseigner un mot de passe' });
    }
    if (!user.login) {
        errors.push({ code: "LGN", message: 'Renseigner un login' });
    }
    if (!user.birthdate) {
        errors.push({ code: "BIRTH", message: 'Date de naissance invalide' });
    }
    if (!user.lastName) {
        errors.push({ code: "LSTN", message: 'Renseigner un nom de famille' });
    }
    if (!user.firstName) {
        errors.push({ code: "FRSN", message: 'Renseigner un prénom' });
    }
    if (errors.length > 0) {
        return Promise.reject(errors);
    }

    const stored = users.filter(_ => _.id === user.id)[0];
    save(users.filter(_ => _.id !== user.id).concat([{
        id: user.id,
        lastName: user.lastName,
        firstName: user.firstName,
        birthdate: user.birthdate,
        login: stored?.login,
        isActif: user.isActif,
        password: stored?.password
    }]));
    return Promise.resolve(user.id); 
}

export function getUsersGet() {
    const users = load();
    return Promise.resolve(users);
}

export function getUserGet(uri: string) {
    const id = +uri.substr(USER('' as any).length);
    const users = load();
    return Promise.resolve(users.filter(_ => _.id === id)[0]);
}