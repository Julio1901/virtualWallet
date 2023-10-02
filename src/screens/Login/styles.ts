import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
	padding: ${RFValue(10)}px;
`


export const ContentHeader = styled.View`
	padding: ${RFValue(20)}px ;
	align-items: center;
	justify-content: center;
`

export const ContentBody = styled.View``

export const ContentFooter = styled.View``

export const Title = styled.Text`
	font-size: ${RFValue(25)}px;
	margin-top: ${RFValue(40)}px;;
	text-align: center;
	font-family: 'Poppins-Medium';
`

export const Description = styled.Text`
	margin-top:  ${RFValue(60)}px;
	font-size:  ${RFValue(15)}px;
	margin-bottom: ${RFValue(10)}px ;
	font-family: 'Poppins-Light'
`

export const ViewButton = styled.View`
flex-direction: row;
`
