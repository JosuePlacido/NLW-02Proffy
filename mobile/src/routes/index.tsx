import React from 'react';
import {useAuth} from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { ContainerPrimary } from '../assets/styles/views';
import { ActivityIndicator } from 'react-native';
const Routes: React.FC = () => {
    const { loading,signed } = useAuth();    
    if(loading){
        return (
            <ContainerPrimary>
                <ActivityIndicator size="large"></ActivityIndicator>
            </ContainerPrimary>
        );
    }
    return (signed?<AppRoutes />:<AuthRoutes/>);
}
export default Routes;