import React, { useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Home from './Home';
import Loading from './Loading';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../actions/Auth/AuthActions';

const AsyncDynamicPAge = importedComponent(
    () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
    {
        LoadingComponent: Loading
    }
);
const AsyncNoMatch = importedComponent(
    () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
    {
        LoadingComponent: Loading
    }
);
const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dynamic" component={AsyncDynamicPAge} />
                    <Route component={AsyncNoMatch} />
                </Switch>
            </div>
        </Router>
    );
};
export default App;