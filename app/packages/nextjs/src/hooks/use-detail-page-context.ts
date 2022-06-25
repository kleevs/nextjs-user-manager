import { createStore } from "lib";
import { useMemo } from "react";
import { DetailPageContext, UserAccount } from "user-manager";
import { useAppContext } from "./use-app-context";

export function useDetailPage(user: UserAccount) {
    const appContext = useAppContext();
    return useMemo<DetailPageContext>(() => ({
        ...appContext,
        user: createStore(user)
    }), [user, appContext]);
}

