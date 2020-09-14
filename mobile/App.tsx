import React from "react";

import {
	Archivo_400Regular,
	Archivo_700Bold,
	useFonts,
} from "@expo-google-fonts/archivo";
import {
	Poppins_400Regular,
	Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

import { AuthProvider, useAuth } from "./src/contexts/auth";
import { useFirstLaunch,FirstLaunchProvider } from "./src/contexts/firstLaunch";
import Routes from "./src/routes/index";

export default function App() {
    const { loading } = useAuth();
	const [fontsLoaded] = useFonts({
		Archivo_400Regular,
		Archivo_700Bold,
		Poppins_400Regular,
		Poppins_600SemiBold,
	});
	if (!fontsLoaded || loading) {
		return <AppLoading />;
	}
	return (
		<NavigationContainer>
			<AuthProvider>
			<FirstLaunchProvider>
				<Routes />
			</FirstLaunchProvider>
			</AuthProvider>
		</NavigationContainer>
	);
}
