import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { ListModule, DetailModule } from 'user-manager-react'

function Content() {
    const history = useHistory();
    const navigate = (href: string) => { history.push(href); }
    return <Switch>
        <Route exact path='/users' render={() => <DetailModule navigate={navigate} id={0} />} />
        <Route exact path='/users/:id' render={({match: { params: { id }}}) => <DetailModule navigate={navigate} id={+id} />} />        
        <Route path="/" render={() => <ListModule navigate={navigate} />} />
    </Switch>
}

function App({}: {}) {
    return <Router>
        <Content />
    </Router>
}

render(<App/>, document.getElementById("app"));


