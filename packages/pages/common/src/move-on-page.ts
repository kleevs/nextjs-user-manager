import { Store, Updater } from "lib";
import { PageData } from "./type";

export const HomeLocation = '/'; 
export function moveOnHome<T>(store: Store<T> & Updater<PageData>) {
    store.update({...store.getValue(), href: HomeLocation })
}

export const DetailLocation = (id: number) => !!id ? `/users/${id}` : '/users'; 
export function moveOnDetail<T>(store: Store<T> & Updater<PageData>, id: number) {
    store.update({...store.getValue(), href: DetailLocation(id) })
}