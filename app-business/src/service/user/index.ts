import { saveUserFactory, removeUserFactory, getUserFactory, getUsersFactory } from './user-factory'
import { saveUserPost, saveUserPut, getUserGet, getUsersGet } from '../../tool/ajax-mock'

export const saveUser = saveUserFactory({ put: saveUserPut, post: saveUserPost })
export const removeUser = removeUserFactory({ remove: <TResult>() => Promise.resolve<TResult>(null) })
export const getUser = getUserFactory({ get: getUserGet })
export const getUsers = getUsersFactory({ get: getUsersGet })