import { saveUserPost, saveUserPut, getUserGet, getUsersGet } from '../../../tool/ajax-mock'

export let post = saveUserPost;
export let put = saveUserPut;
export let remove: (uri: string) => Promise<void> = null;
export let getUsers = getUsersGet;
export let getUser = getUserGet;