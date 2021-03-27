import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from 'user-manager-react/src/container/list'
import { useAsync } from 'user-manager-react/src/hook/use-async'
import { DetailModule } from 'user-manager-react/src/module/detail'
import { getUsers } from "user-manager-business/src/service/user";

function App({}: {}) {
    const users = useAsync(() => getUsers(), [], []);

    return <Router>
        <Switch>
            <Route exact path={['/users', '/users/:id']} render={({match: { params: { id }}}) => <DetailModule id={id} />} />
            <Route path="/">
                <List users={users}/>
            </Route>
        </Switch>
    </Router>
}

render(<App/>, document.getElementById("app"));


