import { USER } from "../../constant/url";
import { UserAccount, UserError } from "../../type/user";

export function saveUserFactory({post, put}: { 
    post: (uri: string, v: UserAccount) => Promise<number>;
    put: (uri: string, v: UserAccount) => Promise<number>;
}): (user: UserAccount) => Promise<number> { 
    return function saveUser(user) { 
        return (!!user.id && 
            post(USER(user.id), user) || 
            put(USER(user.id), user))
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