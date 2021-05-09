import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { MobileModule, Page } from 'user-manager-react/src/main'

function Content() {
    const history = useHistory();
    const navigate = (href: string) => { 
        history.push(href); 
    }
    return <Switch>
        <Route exact path='/users' render={() => <MobileModule navigate={navigate} id={0} page={Page.Detail} />} />
        <Route exact path='/users/:id' render={({match: { params: { id }}}) => <MobileModule navigate={navigate} id={+id} page={Page.Detail} />} />
        <Route path="/" render={() => <MobileModule id={0} navigate={navigate} page={Page.List} />} />
    </Switch>
}

function App({}: {}) {
    return <Router>
        <Content />
    </Router>
}

render(<App/>, document.getElementById("app"));


