import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/login';
import Register from '../pages/register';
import PasswordRecovery from '../pages/passwordRecovery';
import Confirm from "../pages/confirm";

const {Navigator,Screen} = createStackNavigator();

function AuthRoutes(){
    return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="SignIn" component={SignIn} />
			<Screen name="Register" component={Register} />
			<Screen name="PasswordRecovery" component={PasswordRecovery} />
			<Screen name="Confirm" component={Confirm} />
		</Navigator>
	);
}
export default AuthRoutes;