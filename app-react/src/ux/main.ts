import { stopPropagation } from '../tools/dom'
import { Table as TableStyle, Header, Body, Row, Cellule, Input, Checkbox as StyleCheckbox } from "../style";
import { dateToString, parseDate } from '../tools/format';
import CardFactory from './component/card'
import CheckboxFactory from './component/checkbox'
import PanelFactory from './component/panel'
import TableFactory from './component/table'
import TextFieldFactory from './component/text-field'
import DateFieldFactory from './component/date-field'
import LayoutMobileFactory from './component/layout-mobile'

export const Card = CardFactory({ stopPropagation })
export const Checkbox = CheckboxFactory({ Checkbox: StyleCheckbox })
export const LayoutMobile = LayoutMobileFactory()
export const Panel = PanelFactory()
export const Table = TableFactory({ Table: TableStyle, Header, Body, Row, Cellule })
export const TextField = TextFieldFactory({ Input })
export const DateField = DateFieldFactory({ Input, dateToString, parseDate })