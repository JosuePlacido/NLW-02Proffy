import React,{Component} from 'react';
import {BrowserRouter,Route, Redirect, Switch, RouteProps} from 'react-router-dom';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm/index.';
import Login from './pages/Login';
import Home from './pages/Home';
import { useAuth,getToken } from './contexts/auth';
interface PrivateRouteProps extends RouteProps {
	component: any;
}
const PrivateRoute = (props: PrivateRouteProps) => {
    const { signed,user } = useAuth();
	const { component: Component,  ...rest } = props;
	return (
		<Route
			{...rest}
			render={(props) =>
				signed || getToken() ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};
const OnlyPublicRoute = (props: PrivateRouteProps) => {
	const { signed } = useAuth();
	const { component: Component, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(props) =>
				!(signed || getToken()) ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/"
						}}
					/>
				)
			}
		/>
	);
};
function Routes(){
    return (
		<BrowserRouter>
			<Switch>
				<OnlyPublicRoute path="/login" component={Login} />
				<PrivateRoute path="/" exact component={Home} />
				<PrivateRoute path="/home" component={Home} />
				<PrivateRoute path="/study" component={TeacherList} />
				<PrivateRoute path="/give-classes" component={TeacherForm} />
			</Switch>
		</BrowserRouter>
	);
}
export default Routes;