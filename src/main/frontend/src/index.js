import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from './component/Main';
import AdminPanel from './component/AdminPanel';
import UserPanel from './component/UserPanel';
import HousePanel from './component/HousePanel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
console.log("injecting router to root...");

ReactDOM.render((
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={AdminPanel}/>
                <Route path="user/:id" component={UserPanel}/>
                <Route path="house/:id" component={HousePanel}/>
            </Route>
            {/*<Route path="simulate" component={Main}>*/}
                {/*<IndexRoute component={AdminPanel}/>*/}
                {/*<Route path="user/:id" component={UserPanel}/>*/}
                {/*<Route path="house/:id" component={HousePanel}/>*/}
            {/*</Route>*/}
        </Router>
    </MuiThemeProvider>
    ),
  document.getElementById('root')
);

console.log("router injected");
