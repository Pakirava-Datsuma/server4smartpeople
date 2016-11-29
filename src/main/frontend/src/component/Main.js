/**
 * Created by swanta on 29.11.16.
 */
import React, {Component} from 'react';
import {Route, Router, browserHistory} from 'react-router';
import ListModule from './ListModule';

class Main extends React.Component {
    constructor () {
        super();
        this.state = {
            usersModule: ListModule,
            housesModule: ListModule
        }
    }
}

export default Main;