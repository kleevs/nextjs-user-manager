import { UserAccount, PageData } from "common-page";

export type PageListData = PageData & {
    users: UserAccount[];
}