import React from "react"
import {
	View,
	Text,
	StyleSheet,
	Image,
	useWindowDimensions,
} from "react-native"
import { useFonts } from "expo-font"
import {
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,
	OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans"

const OnboardingItem = ({ item }) => {
	const { width } = useWindowDimensions()
	let [fontsLoaded, error] = useFonts({
		OpenSans_700Bold,
	})
	if (!fontsLoaded) {
		console.log(error)
	}
	return (
		<View style={[styles.container, { width }]}>
			<Image
				source={item.image}
				style={[styles.image, { resizeMode: "contain" }]}
			/>

			<View style={{ flex: 0.3 }}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.description}>{item.description}</Text>
			</View>
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
	image: {
		flex: 0.7,
		width: 250,
		height: 120,
		justifyContent: "center",
		paddingBottom: 65,
	},
	title: {
		color: "black",
		fontFamily: "OpenSans_700Bold",
		fontSize: 22,
		marginBottom: 6,
		marginHorizontal: 2,
		textAlign: "center",
	},
	description: {
		color: "grey",
		textAlign: "center",
		paddingHorizontal: 64,
	},
})

export default OnboardingItem
