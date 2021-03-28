import styled from 'styled-components';
import { BlockCss, LinkCss, 
    TableCss, HeaderCss, BodyCss, TitleCss, RowCss, CelluleCss, 
    InputCss, CheckboxCss 
} from 'user-manager-style/src'

export const Block = styled.div`${BlockCss()}`;
export const Link = (styled.a)`${LinkCss()}`;

export const Table = (styled.table)`${TableCss()}`;
export const Header = (styled.thead)`${HeaderCss()}`;
export const Body = (styled.tbody)`${BodyCss()}`;
export const Title = (styled.th)`${TitleCss()}`;
export const Row = (styled.tr)`${RowCss()}`;
export const Cellule = (styled.td)`${CelluleCss()}`;

export const Input = (styled.input)`${InputCss()}`;
export const Checkbox = (styled.input)`${CheckboxCss()}`;