import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { User, UserError } from "user-manager-business/src/type/user";
import List from 'user-manager-react/src/container/list'
import Detail from 'user-manager-react/src/container/detail'

function App({}: {}) {
    const [users] = React.useState<User[]>([]);
    const [user, onChange] = React.useState<User>({});
    const [errors, setErrors] = React.useState<UserError>({});

    return <Router>
        <Switch>
            <Route path="/users">
                <Detail user={user} onChange={onChange} errors={errors} setErrors={setErrors}/>
            </Route>
            <Route path="/">
                <List users={users}/>
            </Route>
        </Switch>
    </Router>
}

render(<App/>, document.getElementById("app"));