import { USER, USERS } from "../../constant/url";

export type Deps<TUser> = {
    Get: (uri: string) => Promise<TUser>;
    Put: (uri: string, data: TUser) => Promise<number>;
    Post: (uri: string, data: TUser) => Promise<number>;
    Remove: (uri: string) => Promise<void>;
}

export  const saveUserFactory = <TUser extends { id: number }>({put, post}: {
    put: Deps<TUser>['Put'];
    post: Deps<TUser>['Post'];
}) => 
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

export const removeUserFactory = <TUser>({remove}: {
    remove: Deps<TUser>['Remove']
}) => 
function removeUser(id: number) {
    return remove(USER(id));
}

export const getUsersFactory = <TUser>({get}: {
    get: Deps<TUser[]>['Get']
}) => 
function getUsers() { 
    return get(USERS); 
}

export const getUserFactory = <TUser>({get}: {
    get: Deps<TUser>['Get']
}) => 
function getUser(id: number) { 
    return get(USER(id)); 
}