import React from "react";
import { render } from "react-dom";
import { User } from "user-manager-business/src/type/user";
import List from 'user-manager-react/src/container/list'

function App({}: {}) {
    const [users] = React.useState<User[]>([]);

    return <List users={users}/>
}

render(<App/>, document.getElementById("app"));