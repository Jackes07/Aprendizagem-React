// Como configurar a divisão de código baseada em rotas na sua aplicação 
//usando bibliotecas como o React Router com React.lazy.

import React, {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Home = lazy(()=> import('./routes/Home'))
const About = lazy(() => import('./routes/About'))

const App = ()=> (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            </Switch>
        </Suspense>
    </Router>
)
