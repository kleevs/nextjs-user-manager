import { apiDomain } from "config/constant";
import { HttpGet, UserAccount } from "./common/type";

export async function loadUser(get: HttpGet, id: number) { 
    return await get<UserAccount>(`${apiDomain}/users/${id}`);
}