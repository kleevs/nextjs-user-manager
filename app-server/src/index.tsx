import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { ListModule } from 'user-manager-react/src/module/list'
import { DetailModule } from 'user-manager-react/src/module/detail'
import { MobileModule, Page } from 'user-manager-react/src/module/mobile'
import { useComponent } from "user-manager-react/src/hook/use-component";

function App({}: {}) {
    const navigate = (href: string) => { location.href = href; }
    return <Router>
        <Switch>
            <Route exact path='/users' render={() => <DetailModule navigate={navigate} id={0} />} />
            <Route exact path='/users/:id' render={({match: { params: { id }}}) => <DetailModule navigate={navigate} id={+id} />} />
            <Route path="/" render={() => <ListModule navigate={navigate} />} />
        </Switch>
    </Router>
}

function AppMobile({}: {}) {
    const Content = useComponent(() => {
        const history = useHistory();
        const navigate = (href: string) => { history.push(href); }
        return <Switch>
            <Route exact path='/users' render={({match: { params: { }}}) => <MobileModule id={0} navigate={navigate} page={Page.Detail} />} />
            <Route exact path='/users/:id' 
                render={({match: { params: { id }}}) => <MobileModule id={+id} navigate={navigate} page={Page.Detail} />} />
            <Route exact path={['/']} 
                render={() => <MobileModule id={0} navigate={navigate} page={Page.List} />} />
        </Switch>
    })

    return <Router>
        <Content />
    </Router>
}

render(<AppMobile/>, document.getElementById("app"));


