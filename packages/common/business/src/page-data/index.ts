import { load, save } from "../storage";
import { UserAccount } from "../user";

export function createListPageData() {
    return {
        getUsers: () => load() as UserAccount[],
        saveUsers: (users: UserAccount[]) => save(users)
    }
}
