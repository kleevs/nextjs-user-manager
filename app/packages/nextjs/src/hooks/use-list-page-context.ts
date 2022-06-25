import { createStore } from "lib";
import { useMemo } from "react";
import { ListPageContext, UserAccount } from "user-manager";
import { useAppContext } from "./use-app-context";

export function useListPage(users: UserAccount[]) {
    const appContext = useAppContext();
    return useMemo<ListPageContext>(() => ({
        ...appContext,
        users: createStore(users)
    }), [users, appContext]);
}

