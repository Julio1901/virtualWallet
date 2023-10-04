import styled from "styled-components/native";
import { GestureHandlerRootView, RectButton } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



export const Button = styled(RectButton)`
	width: ${RFValue(130)}px;
	height:  ${RFValue(60)}px;
	margin-left: ${RFValue(10)}px;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	margin-bottom: 16px ;
	border-radius:  ${RFValue(30)}px;
	box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
	background-color: #4368C7;
`

export const FacebookIcon = styled.Image`
	width: ${RFValue(25)}px;
	height:  ${RFValue(25)}px;
`

export const Title = styled.Text`
	font-size: ${RFValue(15)}px;
	margin-left: ${RFValue(10)}px ;
	font-family: 'Poppins-Light';
	color: #FFFFFF;
`


// Não está funcionando o border Radius
export const StyledGestureHandlerRootView = styled(GestureHandlerRootView)`
  border-radius: 10px;
`;
