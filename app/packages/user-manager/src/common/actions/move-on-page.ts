import { Store, format } from "lib";

type DataDeps = {
    href: string;
    meta: {
        uri: {
            home: string;
            detail: string;
        }
    }
}

type DetailDataDeps = {
    href: string;
    meta: {
        uri: {
            detail: string;
        }
    }
}

export function moveOnHome<T extends DataDeps>(store: Store<T>) {
    const current = store.getValue();
    store.update({...current, href: current.meta.uri.home })
}

export function moveOnDetail<T extends DataDeps>(store: Store<T>, id: number) {
    const current = store.getValue();
    store.update({...current, href: detailUri(store, id) })
}

export function detailUri<T extends DetailDataDeps>(store: Store<T>, id: number) {
    const current = store.getValue();
    return format(current.meta.uri.detail, { id: id });
}