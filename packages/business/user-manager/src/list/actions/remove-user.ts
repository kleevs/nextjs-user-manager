import { HomeLocation, UserAccount } from "../../common";
import { remove, get, Store } from "lib";
import { PageListData } from "../type";

export async function removeUser(store: Store<PageListData>, id: number) {
    await remove(`/api/users/${id}`);
    const result = await get<UserAccount[]>('/api/users');

    store.update({...store.getValue(), users: result, href: HomeLocation });
}