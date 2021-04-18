import { USER, USERS } from "../../constant/url";
import type { Put, Post, Get, Remove } from './_deps_/user-factory.deps'

export  const saveUserFactory = <TUser extends { id: number }>({put, post}: {
    put: Put<number, TUser>;
    post: Post<number, TUser>;
}) => (user: TUser) => { 
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

export const removeUserFactory = <TUser>({remove}: {
    remove: Remove<TUser>;
}) => (id: number) => {
    return remove(USER(id));
}

export const getUsersFactory = <TUser>({get}: {
    get: Get<TUser>;
}) => () => { 
    return get(USERS); 
}

export const getUserFactory = <TUser>({get}: {
    get: Get<TUser>
}) => (id: number) => { 
    return get(USER(id)); 
}