import { format } from "lib";
import { AppContext } from "./common/type";

export function moveOnDetail(context: AppContext, id: number) {
    context.moveTo(detailUri(context, id));
}

export function detailUri(context: AppContext, id: number) {
    return format(context.uri.detail, { id: id });
}