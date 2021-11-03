import React from 'react'
import { BrowserRouter,Switch,Route } from "react-router-dom"

import Heros from './Heros'
import NombresR from './NombresR'
import HeroDetail from "./HeroDetail"
import Generador from "./Generador"
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
                    <Route >
                        <HeroDetail />
                    </Route>
                    
                    
                </Switch>
            </View>
        </BrowserRouter>
    )
}

export default RouterApp
