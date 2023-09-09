import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Component/Home.js';
import Navigation from './Component/Navigation.js';
import Authentication from './Component/Authentication.js';
import Activate from './Component/Activate.js';
import Rooms from './Component/Rooms.js';
import { useSelector } from 'react-redux';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh.js';
import Loader from './Component/Loader.js'
import Room from './Component/Room/Room.js'
function App() {
    const { loading } = useLoadingWithRefresh();
    return loading ? (
        <Loader message="Loading, please wait.." />
        ) : (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <GuestRoute path="/" exact>
                    <Home />
                </GuestRoute>
                <GuestRoute path="/authentication">
                    <Authentication />
                </GuestRoute>
                <SemiProtectedRoute path="/activate">
                    <Activate />
                </SemiProtectedRoute>
                <ProtectedRoute path="/rooms">
                    <Rooms />
                </ProtectedRoute>
                <ProtectedRoute path="/room/:id">
                    <Room />
                </ProtectedRoute>
            </Switch>
        </BrowserRouter>
    );
}

const GuestRoute = ({ children, ...rest }) => {
    const { isAuth } = useSelector((state) => state.auth);
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return isAuth ? (
                    <Redirect
                        to={{
                            pathname: '/rooms',
                            state: { from: location },
                        }}
                    />
                ) : (
                    children
                );
            }}
        ></Route>
    );
};

const SemiProtectedRoute = ({ children, ...rest }) => {
    const { user, isAuth } = useSelector((state) => state.auth);
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return !isAuth ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                ) : isAuth && !user.activated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/rooms',
                            state: { from: location },
                        }}
                    />
                );
            }}
        ></Route>
    );
};

const ProtectedRoute = ({ children, ...rest }) => {
    const { user, isAuth } = useSelector((state) => state.auth);
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return !isAuth ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                ) : isAuth && !user.activated ? (
                    <Redirect
                        to={{
                            pathname: '/activate',
                            state: { from: location },
                        }}
                    />
                ) : (
                    children
                );
            }}
        ></Route>
    );
};

export default App;
