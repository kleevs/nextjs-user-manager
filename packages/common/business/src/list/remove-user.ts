import { Store } from "lib";
import { PageListData } from "./type";

export function removeUser(store: Store<PageListData>, id: number) {
    const { users } = store.getValue();
    const result = users.filter(_ => _.id !== id);
    store.update({...store.getValue(), users: result, href: `/` });
}