import { USER, USERS } from "../../constant/url";
import { post, put, remove, getUsers as ajaxUsers, getUser as ajaxUser } from './_deps_/index.deps'

export  function saveUser(user) { 
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

export function removeUser(id) {
    return remove(USER(id));
}

export  function getUsers() { 
    return ajaxUsers(USERS); 
}

export function getUser(id) { 
    return ajaxUser(USER(id)); 
}