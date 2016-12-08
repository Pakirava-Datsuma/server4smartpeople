import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from './component/Main';
import AdminPanel from './component/AdminPanel';
import UserPanel from './component/UserPanel';
import HousePanel from './component/HousePanel';
// import './index.css';

console.log("injecting router to root...");

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={AdminPanel}/>
                <Route path="user/:id" component={UserPanel}/>
                <Route path="house/:id" component={HousePanel}/>
            </Route>
        </Router>
    ),
  document.getElementById('root')
);

console.log("router injected");
