import { Store } from "lib";

type DataDeps = {
    href: string;
    meta: {
        uri: {
            home: string;
            detail: (id: number) => string;
        }
    }
}

export function moveOnHome<T extends DataDeps>(store: Store<T>) {
    const current = store.getValue();
    store.update({...current, href: current.meta.uri.home })
}

export function moveOnDetail<T extends DataDeps>(store: Store<T>, id: number) {
    const current = store.getValue();
    store.update({...current, href: current.meta.uri.detail(id) })
}