import { saveUserFactory, removeUserFactory, getUserFactory, getUsersFactory } from './user/service/ajax'
import { saveUserPost, saveUserPut, getUserGet, getUsersGet } from './tool/ajax-mock'
import { User } from './type/user'

export const saveUser = saveUserFactory({ put: saveUserPut, post: saveUserPost })
export const removeUser = removeUserFactory({ remove: <TResult>() => Promise.resolve<TResult>(null) })
export const getUser = getUserFactory({ get: getUserGet })
export const getUsers = getUsersFactory<User>({ get: getUsersGet })