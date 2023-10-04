import React from 'react'
import { Button, Title, FacebookIcon, StyledGestureHandlerRootView} from './style'
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import FacebookLogo from '../../assets/icons/facebookIcon.png'

interface Props extends RectButtonProps {
	title: string
}


const ButtonSocialFacebook: React.FC<Props> = ({ title, ...rest}) => {
	return (
		<StyledGestureHandlerRootView>
			<Button {...rest}>
				<FacebookIcon source={FacebookLogo} resizeMode='contain'/>
				<Title>{title}</Title>
			</Button>
		</StyledGestureHandlerRootView>
	)
}

export default ButtonSocialFacebook
