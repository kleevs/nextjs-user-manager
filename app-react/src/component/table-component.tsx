import React from "react";
import { Table, Header, Body, Row, Cellule } from "user-manager-style/src/table";

export default function TableComponent({titles, rows}: {
    titles: (JSX.Element | string)[];
    rows: (JSX.Element | string)[][];
}) {
    return <Table>
        <Header> 
            {titles?.length > 0 && <Row> 
                {titles.map((_, i) => <Cellule key={i}>{_}</Cellule>)}
            </Row>}
        </Header> 
        <Body>
            {rows.map((row,i) => <Row key={i}>
                {row.map((c, j) => <Cellule key={j}>{c}</Cellule>)}
            </Row>)}
        </Body>
    </Table>
}