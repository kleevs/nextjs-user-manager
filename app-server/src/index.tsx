import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { ListModule } from 'user-manager-react/src/module/list'
import { DetailModule } from 'user-manager-react/src/module/detail'
import { MobileModule, Page } from 'user-manager-react/src/module/mobile'
import { useComponent } from "user-manager-react/src/hook/use-component";

function App({}: {}) {
    const Content = useComponent(() => {
        const history = useHistory();
        const navigate = (href: string) => { history.push(href); }
        const navigateMobile = (href: string) => { 
            history.push(`/mobile${href}`); 
        }
        return <Switch>
            <Route exact path='/users' render={() => <DetailModule navigate={navigate} id={0} />} />
            <Route exact path='/users/:id' render={({match: { params: { id }}}) => <DetailModule navigate={navigate} id={+id} />} />

            <Route exact path='/mobile/users' render={() => <MobileModule navigate={navigateMobile} id={0} page={Page.Detail} />} />
            <Route exact path='/mobile/users/:id' render={({match: { params: { id }}}) => <MobileModule navigate={navigateMobile} id={+id} page={Page.Detail} />} />
            <Route path="/mobile" render={() => <MobileModule id={0} navigate={navigateMobile} page={Page.List} />} />
            
            <Route path="/" render={() => <ListModule navigate={navigate} />} />
        </Switch>
    })

    return <Router>
        <Content />
    </Router>
}

render(<App/>, document.getElementById("app"));


