import { load, save } from "./storage";
import { PageListData, Store, UserAccount } from "./type";
import { saveUser, removeUser } from './action';
import { createStore } from "./lib";

export function createListPageData() {
    const store = createStore<PageListData>({ users: load() });

    return {
        store,
        saveUser: (user: UserAccount) => saveUser(store, user),
        removeUser: (id: number) => removeUser(store, id)
    }
}

export function initialize(store: Store<PageListData>) {
    return store.onUpdate(({ users }) => {
        save(users)
    });
}