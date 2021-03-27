import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListModule } from 'user-manager-react/src/module/list'
import { DetailModule } from 'user-manager-react/src/module/detail'

function App({}: {}) {
    return <Router>
        <Switch>
            <Route exact path={['/users', '/users/:id']} render={({match: { params: { id }}}) => <DetailModule id={id} />} />
            <Route path="/" render={() => <ListModule />} />
        </Switch>
    </Router>
}

render(<App/>, document.getElementById("app"));


