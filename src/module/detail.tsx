import DetailComponent from 'src/component/detail';
import ToolService from 'src/domain/api/tool.service';
import AjaxService from 'src/domain/api/ajax.service';
import { UserEngine } from 'src/engine/user.engine';

export default function DetailModule({user}: {user: User & Account }) {
    const userEngine = new UserEngine(new AjaxService());
    const Result = DetailComponent({
        tool: new ToolService(),
        save: (user) => userEngine.saveUser(user),
        navigate: (href) => location.href = href
    });  
    
    return <Result user={user} errors={{}}/>;
}