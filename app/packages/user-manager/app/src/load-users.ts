import { apiDomain } from "config/constant";
import { HttpGet, UserAccount } from "./common/type";

export async function loadUsers(get: HttpGet) { 
    return await get<UserAccount[]>(`${apiDomain}/api/users`);
}