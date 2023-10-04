import styled, { css } from "styled-components/native";
import { TextInput, ViewProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface IContainerProps extends ViewProps {
	hasError: boolean
	isFocused: boolean
	isFilled: boolean
}

interface ITextContainerProps extends ViewProps {
	hasError: boolean
	isFocused: boolean
	isFilled: boolean
}

export const Container = styled.View`
	width: 85%;
	height: ${RFValue(50)}px;
	flex-direction: row;
	margin-bottom: ${RFValue(10)}px ;
`

export const IconContainer = styled.View<IContainerProps>`
	width: ${RFValue(55)}px;
	height: ${RFValue(50)}px;
	justify-content: center;
	align-items: center;

	/* Quando estiver focado a borda vai ser azul */
	${ (  {isFocused, isFilled} )  => (isFocused || isFilled) && css`
			border-bottom-width: ${RFValue(2)}px ;
			border-bottom-color: #4368C7 ;
	` }

	${({hasError}) => hasError && css`
		border-bottom-color: #EB5757,

	`}

	margin-right: ${RFValue(3)}px;
	border-top-left-radius: ${RFValue(5)}px;
	border-bottom-left-radius: ${RFValue(5)}px;
	background: #E0E0E0;

`

export const InputText = styled(TextInput)<ITextContainerProps>`
	flex: 1;
	font-size: ${RFValue(12)}px;
	border-top-right-radius: ${RFValue(5)}px;
	border-bottom-right-radius: ${RFValue(5)}px;
	color: #BDBDBD;
	font-family: 'Poppins-Light';

	/* Quando estiver focado a borda vai ser azul */
	${ (  {isFocused, isFilled} )  => (isFocused || isFilled) && css`
				border-bottom-width: ${RFValue(2)}px ;
				border-bottom-color: #4368C7 ;
	` }

	${({hasError}) => hasError && css`
		border-bottom-color: #EB5757,

	`}

	padding: 0 ${RFValue(10)}px;
`
