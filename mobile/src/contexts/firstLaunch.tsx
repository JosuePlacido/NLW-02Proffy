import React,{createContext,useState,useEffect,useContext} from 'react';
import {AsyncStorage} from 'react-native';
import * as auth from '../services/auth';
import api from '../services/api';
export interface FirstLaunchContextData {
	firstLaunch: boolean;
	register(): void;
}
export const FirstLaunchProvider: React.FC = ({ children }) => {
	const [firstLaunch, setFirstLaunch] = useState(true);

	useEffect(() => {
		async function loadStoragedData() {
			const registry = await AsyncStorage.getItem("@RNFirstLaunch");
			if (registry) {
				setFirstLaunch(false);
			}
		}
		loadStoragedData();
	}, []);
	async function register() {
		await AsyncStorage.setItem("@RNFirstLaunch", "true");
		setFirstLaunch(false);
	}
	return (
		<FirstLaunchContext.Provider value={{ firstLaunch, register }}>
			{children}
		</FirstLaunchContext.Provider>
	);
};

const FirstLaunchContext = createContext<FirstLaunchContextData>(
	{} as FirstLaunchContextData
);
export function useFirstLaunch(){
    const context = useContext(FirstLaunchContext);
    return context;
}