import { get } from 'lib';
import { UserAccount } from "./common/type";

export async function loadUser(id: number) { 
    return await get<UserAccount>(`/api/users/${id}`);
}