import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/login';
import Register from '../pages/register';
import PasswordRecovery from '../pages/passwordRecovery';
import Confirm from "../pages/confirm";
import OnBoarding from "../pages/onboarding";
import OnBoardingTwo from "../pages/onboarding/onboardingtwo";

const {Navigator,Screen} = createStackNavigator();

function AuthRoutes(){
    return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="OnBoarding" component={OnBoarding} />
			<Screen name="OnBoardingTwo" component={OnBoardingTwo} />
		</Navigator>
	);
}
export default AuthRoutes;