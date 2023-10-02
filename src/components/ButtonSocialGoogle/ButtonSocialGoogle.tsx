import React from 'react'
import { Button, GoogleIcon , Title} from './style'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GoogleLogo from '../../assets/icons/googleIcon.png'
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
	title: string
}


const ButtonSocialGoogle: React.FC<Props> = ({ title, ...rest}) => {
	return (
		<GestureHandlerRootView>
			<Button {...rest}>
				<GoogleIcon source={GoogleLogo} resizeMode='contain'/>
				<Title>{title}</Title>
			</Button>
		</GestureHandlerRootView>
	)
}

export default ButtonSocialGoogle
