import { UserAccount, PageData } from "../common/actions";

export type PageListData = PageData & {
    users: UserAccount[];
}