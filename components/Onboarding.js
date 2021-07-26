import React, { useState, useRef } from "react"
import { View, Text, FlatList, Animated, StyleSheet } from "react-native"
import introSlides from "../introSlides"
import OnboardingItem from "./OnboardingItem"

const Onboarding = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const scrollX = useRef(new Animated.Value(0)).current
	const introSlidesRef = useRef(null)
	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index)
	}).current

	/* Before the next screen is displayed, previous should be 50% of the  screen */
	const viewConfig = useRef({ viewAreaCoveragePercentageThreshold: 50 }).current

	return (
		<View style={StyleSheet.container}>
			<View style={{ flex: 3 }}>
				<FlatList
					data={introSlides}
					renderItem={({ item }) => <OnboardingItem item={item} />}
					horizontal
					showsHorizontalScrollIndicator
					pagingEnabled
					bounces={false}
					keyExtractor={(item) => item.id}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{
							useNativeDriver: false,
							/*as native driver does  not support width and we need it*/
						}
					)}
					scrollEventThrottle={32}
					onViewableItemsChanged={viewableItemsChanged}
					viewablilityConfig={viewConfig}
					ref={introSlidesRef}
				/>
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
})

export default Onboarding
