import React from "react";
import { DetailModule } from "user-manager-ui";
import { useDetailPage } from "src/hooks/use-detail-page-context";

export default function DetailPage() {
    const context = useDetailPage({ id: 0 });
    return <DetailModule context={context} />
}
