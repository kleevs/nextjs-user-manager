import { saveUserFactory, removeUserFactory } from "./user";

export const saveUser = saveUserFactory({
    post: () => Promise.resolve(1),
    put: () => Promise.resolve(1)
});

export const removeUser = removeUserFactory({
    delete: () => Promise.resolve()
});