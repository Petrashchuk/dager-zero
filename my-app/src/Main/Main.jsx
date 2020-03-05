import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Counter from "./Counter";
import Names from "./Names";
import Game from './Game'

export const Main = () => (
    <Switch>
        <Route path='/counter' component={Counter}/>
        <Route path='/names' component={Names}/>
        <Route path='/game' component={Game}/>
    </Switch>
)