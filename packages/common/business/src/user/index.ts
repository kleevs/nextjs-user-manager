import { get, post, put, remove } from "../ajax";
export { User, Account, UserAccount, UserError } from "../ajax";

const USERS = "users";
const USER = (id: number) => `users/${id || ''}`;

export function saveUser<TUser extends { id: number }>(user: TUser) { 
    return (!!user.id && 
        put(USER(user.id), user) || 
        post(USERS, user))
        .catch((errors: {code: string; message: string;}[]) => { 
            throw {
                lastNameError: errors.filter(_ => _.code === 'LSTN').map(_ => _.message)[0],
                firstNameError: errors.filter(_ => _.code === 'FRSN').map(_ => _.message)[0],
                birthdateError: errors.filter(_ => _.code === 'BIRTH').map(_ => _.message)[0],
                loginError: errors.filter(_ => _.code === 'LGN').map(_ => _.message)[0],
                passwordError: errors.filter(_ => _.code === 'PSSW').map(_ => _.message)[0]
            }
        });
}

export function removeUser(id: number) {
    return remove(USER(id));
}

export function getUsers<TUser>() { 
    return get<TUser[]>(USERS); 
}

export function getUser<TUser>(id: number) { 
    return get<TUser>(USER(id)); 
}
