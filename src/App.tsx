import React from "react";
import { View, Text, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import COLORS from "./styles/theme"
import { Login } from "./screens/Login/Login";


const App: React.FC = () => {
	return (
		<ThemeProvider theme={COLORS}>
			<StatusBar
				barStyle={"dark-content"}
				translucent backgroundColor={"transparent"}
			/>
			<View>
				<Login />
			</View>
		</ThemeProvider>
	)
}

export default App
