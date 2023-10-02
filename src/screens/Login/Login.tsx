import React from 'react'
import { Text, SafeAreaView } from 'react-native'

import {
	Container,
	ContentHeader,
	ContentBody,
	ContentFooter,
	Title,
	Description,
	ViewButton
} from './styles'
import ButtonSocialGoogle from '../../components/ButtonSocialGoogle/ButtonSocialGoogle'


const Login: React.FC = () => {
	return (
		<SafeAreaView>
			<Container>
				<ContentHeader>
					<Title>Seja bem vindo(a) {"\n"} a Wallat App</Title>
					<Description>Entrar com redes sociais</Description>
					<ViewButton>
						<ButtonSocialGoogle title="Google"/>
						<ButtonSocialGoogle title="Google"/>
					</ViewButton>
				</ContentHeader>
				<ContentBody>

				</ContentBody>
				<ContentFooter>

				</ContentFooter>


			</Container>
		</SafeAreaView>

	)
}

export { Login }
