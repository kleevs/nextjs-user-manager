import { saveUserPost, saveUserPut } from "../../tool/ajax-mock";
import { saveUserFactory, removeUserFactory } from "./user";

export const saveUser = saveUserFactory({
    post: (_,user) => saveUserPost(user),
    put: (_,user) => saveUserPut(user)
});

export const removeUser = removeUserFactory({
    delete: () => Promise.resolve()
});