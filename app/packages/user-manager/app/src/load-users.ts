import { get } from 'lib';
import { UserAccount } from "./common/type";

export async function loadUsers() { 
    return await get<UserAccount[]>('/api/users');
}