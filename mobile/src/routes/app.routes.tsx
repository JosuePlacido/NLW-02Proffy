import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../pages/landing';
import GiveClasses from '../pages/give-classes';
import StudyTabs from './studyTabs';
import Confirm from '../pages/confirm';

const {Navigator,Screen} = createStackNavigator();

function AppRoutes(){
    return (
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Landing" component={Landing}/>
            <Screen name="GivaClasses" component={GiveClasses}/>
            <Screen name="StudyTabs" component={StudyTabs}/>
            <Screen name="Confirm" component={Confirm}/>
        </Navigator>
    );
}
export default AppRoutes;