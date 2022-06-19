import React from "react";
import { DetailModule } from "user-manager-ui";
import { useAppContext } from "src/hooks/use-app-context";

export default function DetailPage() {
    const context = useAppContext();
    return <DetailModule context={context} id={null} />
}
