import { saveUserPost, saveUserPut, getUserGet, getUsersGet } from "../../tool/ajax-mock";
import { saveUserFactory, removeUserFactory, getUsersFactory, getUserFactory } from "./user";

export const saveUser = saveUserFactory({
    post: (_,user) => saveUserPost(user),
    put: (_,user) => saveUserPut(user)
});

export const removeUser = removeUserFactory({
    delete: () => Promise.resolve()
});

export const getUsers = getUsersFactory({
    get: () => getUsersGet()
});

export const getUser = getUserFactory({
    get: (uri) => getUserGet(uri)
});