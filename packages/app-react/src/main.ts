import { 
    TextField, DateField, Checkbox, Card as CardBase, Panel, Table as TableBase, LayoutMobile, 
    preventDefault, stopPropagation, Link, dateToString 
} from 'lib/src/main'
import { saveUser, removeUser, getUser, getUsers } from 'user-manager-business/src/main';
import DetailFactory from './component/detail'
import CardFactory from './component/cards'
import TableFactory from './component/table'
import SidebarFactory from './component/sidebar'
import DetailModuleFactory from './module/detail'
import { ListModuleFactory, CardsModuleFactory } from './module/list'
import MobileModuleFactory from './module/mobile'

export { Page } from './module/mobile'

export const Detail = DetailFactory({ TextField, DateField, Checkbox, preventDefault, saveUser })
export const List = DetailFactory({ TextField, DateField, Checkbox, preventDefault, saveUser })
export const Card = CardFactory({ Link, Card: CardBase, Panel, dateToString, preventDefault, removeUser })
export const Sidebar = SidebarFactory()
export const Table = TableFactory({ Table: TableBase, Panel, Link, stopPropagation, preventDefault, dateToString, removeUser })
export const DetailModule = DetailModuleFactory({ Detail, getUser })
export const ListModule = ListModuleFactory({ Table, getUsers })
export const CardsModule = CardsModuleFactory({ Card, getUsers })
export const MobileModule = MobileModuleFactory({ LayoutMobile, CardsModule, DetailModule })
