import { USER, USERS } from "../../constant/url";

export function saveUserFactory<T extends { id?: number }>({post, put}: { 
    post: (uri: string, v: T) => Promise<number>;
    put: (uri: string, v: T) => Promise<number>;
}): <T2 extends T>(user: T2) => Promise<number> { 
    return function saveUser(user) { 
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
}

export function removeUserFactory({delete: remove}: { 
    delete: (uri: string) => Promise<void>;
}): (id: number) => Promise<void> {
    return function removeUser(id) {
        return remove(USER(id));
    }
}

export function getUsersFactory<T>({get}: { 
    get: (uri: string) => Promise<T[]>;
}): () => Promise<T[]>  {
    return function getUsers() { 
        return get(USERS); 
    }
}

export function getUserFactory<T>({get}: { 
    get: (uri: string) => Promise<T>;
}): (id: number) => Promise<T>  {
    return function getUser(id) { 
        return get(USER(id)); 
    }
}