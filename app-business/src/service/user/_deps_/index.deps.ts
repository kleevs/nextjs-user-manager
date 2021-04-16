import { saveUserPost, saveUserPut, getUserGet, getUsersGet } from '../../../tool/ajax-mock'

export let post = saveUserPost;
export let put = saveUserPut;
export let remove: (uri: string) => Promise<void> = null;
export let getUsers = getUsersGet;
export let getUser = getUserGet;

export function resolveDeps(deps: {
    post?: typeof post;
    put?: typeof put;
    remove?: (uri: string) => Promise<void>;
    getUsers?: typeof getUsers;
    getUser?: typeof getUser;
}) {
    post = deps.post;
    put = deps.put;
    remove = deps.remove;
    getUser = deps.getUser;
    getUsers = deps.getUsers;
}