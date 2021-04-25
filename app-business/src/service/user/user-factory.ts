import { USER, USERS } from "../../constant/url";

export type SaveUserDeps<TData> = {
    post: (uri: string, data: TData) => Promise<number>
    put: (uri: string, data: TData) => Promise<number>
}

export type GetUserDeps<TResult> = {
    get: (uri: string) => Promise<TResult>;
}

export type RemoveUsersDeps = {
    remove: (uri: string) => Promise<void>;
}

export  const saveUserFactory = <TUser extends { id: number }>({put, post}: SaveUserDeps<TUser>) => 
function saveUser (user: TUser) { 
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

export const removeUserFactory = ({remove}: RemoveUsersDeps) => 
function removeUser(id: number) {
    return remove(USER(id));
}

export const getUsersFactory = <TUser>({get}: GetUserDeps<TUser[]>) => 
function getUsers() { 
    return get(USERS); 
}

export const getUserFactory = <TUser>({get}: GetUserDeps<TUser>) => 
function getUser(id: number) { 
    return get(USER(id)); 
}