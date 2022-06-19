import { AppContext } from "./common/type";

export function moveOnHome(context: AppContext) {
    context.moveTo(context.uri.home);
}