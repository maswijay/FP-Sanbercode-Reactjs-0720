import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Admin from '../pages/Admin';
import Login from '../pages/Login';
import Movies from '../pages/Movie';
import Games from '../pages/Games'


const Section = ()=>{
    const [user] = useContext(UserContext);

    const PrivateRoute = ({user, ...props}) => {
        if (user) {
            return <Route {...props} />;
        } else {
            return <Redirect to='/login' />
        }
    };

    const LoginRoute = ({user, ...props}) => 
        user ? <Redirect to="/" /> : <Route {...props} />;
    
    return(
        <section>
            <Switch>
                <Route exact path='/' user={user} component={Movies} />
                <Route exact path='/games' user={user} component={Games} />
                <LoginRoute exact path='/login' user={user} component={Login} />
                <PrivateRoute exact path='/admin' user={user} component={Admin} />
            </Switch>
        </section>
    )
}

export default Section