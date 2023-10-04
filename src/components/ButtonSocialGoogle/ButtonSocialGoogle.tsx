import React from 'react'
import { Button, GoogleIcon, StyledGestureHandlerRootView, Title } from './style'
import GoogleLogo from '../../assets/icons/googleIcon.png'
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
	title: string
}

const ButtonSocialGoogle: React.FC<Props> = ({ title, ...rest }) => {
	return (
		<StyledGestureHandlerRootView>
			<Button {...rest}>
				<GoogleIcon source={GoogleLogo} resizeMode='contain' />
				<Title>{title}</Title>
			</Button>
		</StyledGestureHandlerRootView>
	)
}

export default ButtonSocialGoogle
