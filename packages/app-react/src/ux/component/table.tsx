import type { Table, Header, Body, Row, Cellule } from "../../style";
import React from "react";

type Deps = {
    Table: typeof Table;
    Header: typeof Header;
    Body: typeof Body;
    Row: typeof Row;
    Cellule: typeof Cellule;
}

export default ({ Table: TableStyle, Header, Body, Row, Cellule }: Deps) => 
function Table({titles, rows}: {
    titles: (JSX.Element | string)[];
    rows: (JSX.Element | string)[][];
}) {
    return <TableStyle>
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
    </TableStyle>
}