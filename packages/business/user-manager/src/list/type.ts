import { UserAccount, PageData } from "../common";

export type PageListData = PageData & {
    users: UserAccount[];
}