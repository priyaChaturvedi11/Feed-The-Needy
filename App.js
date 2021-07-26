import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import AppLoading from "expo-app-loading"
import { useFonts } from "expo-font"
import {
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,
	OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans"
import {
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto"
import Onboarding from "./components/Onboarding"

export default function App() {
	let [fontsLoaded, error] = useFonts({
		OpenSans_700Bold,
		Roboto_500Medium,
	})

	if (!fontsLoaded) {
		console.log(error)
		return <AppLoading />
	}

	return (
		<View style={styles.container}>
			<Onboarding />
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
