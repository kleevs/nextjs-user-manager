import React from "react";

import styled from 'styled-components';

const TableCss = () => ``;
const HeaderCss = () => ``;
const BodyCss = () => ``;
const TitleCss = () => ``;
const RowCss = () => ``;
const CelluleCss = () => ``;

export const TableStyled = (styled.table)`${TableCss()}`;
export const Header = (styled.thead)`${HeaderCss()}`;
export const Body = (styled.tbody)`${BodyCss()}`;
export const Title = (styled.th)`${TitleCss()}`;
export const Row = (styled.tr)`${RowCss()}`;
export const Cellule = (styled.td)`${CelluleCss()}`;

export default () => 
function Table({titles, rows}: {
    titles: (JSX.Element | string)[];
    rows: (JSX.Element | string)[][];
}) {
    return <TableStyled>
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
    </TableStyled>
}