import { USER } from "../../constant/url";
import { UserAccount } from "../../type/user";

export function saveUserFactory({post, put}: { 
    post: (uri: string, v: UserAccount) => Promise<number>;
    put: (uri: string, v: UserAccount) => Promise<number>;
}): (user: UserAccount) => Promise<number> { 
    return function saveUser(user) { 
        return !!user.id && 
            post(USER(user.id), user) || 
            put(USER(user.id), user);
    }
}

export function removeUserFactory({delete: remove}: { 
    delete: (uri: string) => Promise<void>;
}): (id: number) => Promise<void> {
    return function removeUser(id) {
        return remove(USER(id));
    }
}