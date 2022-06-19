import { ListPageContext } from "./common/type";
import { remove } from "lib";
import { moveOnDetail } from "./move-on-detail";

export async function removeUser(context: ListPageContext, id: number) {
    await remove(`/api/users/${id}`);
    moveOnDetail(context, id);
}