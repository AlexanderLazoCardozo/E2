import React from 'react'
import { BrowserRouter,Switch,Route } from "react-router-dom"

import Heros from './Heros'
import NombresR from './NombresR'
import View from '../View'
const RouterApp = () => {
    return (
        <BrowserRouter>
            <View>
                <Switch>
                    <Route path="/Heros">
                        <Heros />
                    </Route>
                    <Route path="/NombresR">
                        <NombresR />
                    </Route>
                </Switch>
            </View>
        </BrowserRouter>
    )
}

export default RouterApp
