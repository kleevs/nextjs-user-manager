import { saveUserFactory, removeUserFactory, getUserFactory, getUsersFactory } from './user-factory'
import { saveUserPost, saveUserPut, getUserGet, getUsersGet } from '../../tool/ajax-mock'

export const saveUser = saveUserFactory({ put: saveUserPut, post: saveUserPost })
export const removeUser = removeUserFactory({ remove: () => Promise.resolve() })
export const getUser = getUserFactory({ get: getUserGet })
export const getUsers = getUsersFactory({ get: getUsersGet })