import React from "react";
import * as ReactDOM from "react-dom";
import { User } from "user-manager-business/src/type/user";
import List from 'user-manager-react/src/container/list'

function App({}: {}) {
    const [users] = React.useState<User[]>([]);

    // return <div>ok</div>
    return <List users={users}/>
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);