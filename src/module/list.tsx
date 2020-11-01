import ListingComponent from 'src/component/list';
import ToolService from 'src/domain/api/tool.service';
import AjaxService from 'src/domain/api/ajax.service';
import { UserEngine } from 'src/engine/user.engine';

export default function ListingModule({users}: {users: User[] }) {
    const userEngine = new UserEngine(new AjaxService());
    const Result = ListingComponent({
        tool: new ToolService(),
        removeUser: (id) => userEngine.removeUser(id).then(_ => {}),
        navigate: (href) => location.href = href
    });  
    
    return <Result users={users}/>;
}