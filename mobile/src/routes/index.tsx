import React from 'react';
import {useAuth} from '../contexts/auth';
import { useFirstLaunch } from "../contexts/firstLaunch";
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import IntroRoutes from "./intro.routes";
import AsyncStorage from '@react-native-community/async-storage';
const Routes: React.FC = () => {
    const { signed } = useAuth();
	const { firstLaunch } = useFirstLaunch();
	if(firstLaunch){
		return <IntroRoutes />;
	}
    return (signed?<AppRoutes />:<AuthRoutes/>);
}
export default Routes;