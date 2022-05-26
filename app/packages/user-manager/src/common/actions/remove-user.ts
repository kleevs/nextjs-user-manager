import { UserAccount } from "../../common";
import { remove, get, Store } from "lib";

export type RemoveDataDeps = {
    href: string;
    users: UserAccount[];
    meta: {
        uri: {
            home: string;
        }
    }
}

export async function removeUser(store: Store<RemoveDataDeps>, id: number) {
    const { meta: { uri } } = store.getValue();
    await remove(`/api/users/${id}`);
    const result = await get<UserAccount[]>('/api/users');

    store.update({...store.getValue(), users: result, href: uri.home });
}