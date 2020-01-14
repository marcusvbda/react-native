import React, { useEffect, useState } from 'react';
import {
	Container,
	Content,
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	Title,
	Description,
	Image,
} from './styles';
import { View } from 'react-native';
import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Menu from '~/components/Menu'
import { Animated } from "react-native";
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import storage from '~/services/storage';
import api from '~/services/api';
import Loading from '~/pages/Loading';

export default function Main({ navigation }) {
	const [loading, setLoading] = useState(true);
	const [principal, setPrincipal] = useState(null);
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		async function init() {
			let _user = await storage.get("user");
			_user = JSON.parse(_user);
			api.defaults.headers.common['Authorization'] = `Bearer ${_user.api_token}`;
			api.get('/app/courses', {}).then(async (res) => {
				if (Array.isArray(res.data)) {
					setCourses(res.data);
					setPrincipal(res.data[0].id);
				}
				setLoading(false);
			}).catch(er => {
				console.log("erro", er.response);
				setLoading(false);
				storage.remove("user");
				navigation.navigate("Auth");
			});
		}
		init();
	}, []);

	const translateY = new Animated.Value(0);
	const animatedEvent = new Animated.Event(
		[{
			nativeEvent: {
				translationY: translateY
			}
		}],
		{ useNativeDriver: true }
	);

	function onHandlerStateChange(event) {
		let offset = 0;

		if (event.nativeEvent.oldState === State.ACTIVE) {
			let opened = false;
			const { translationY } = event.nativeEvent;
			offset += translationY;
			if (translationY >= 100) {
				opened = true;
			} else {
				translateY.setValue(offset);
				translateY.setOffset(0);
				offset = 0;
			}

			Animated.timing(translateY, {
				toValue: opened ? 380 : 0,
				duration: 200,
				useNativeDriver: true,
			}).start(() => {
				offset = opened ? 380 : 0;
				translateY.setOffset(offset);
				translateY.setValue(0);
			});
		}
	}

	function renderNoCourses() {
		if (loading) return <View />;
		return (
			<Card style={{
				transform: [{
					translateY: translateY.interpolate({
						inputRange: [-200, 0, 380],
						outputRange: [-50, 0, 380],
						extrapolate: 'clamp' //para o translate quando estrapolar os ranges
					}),
				}]
			}}>
				<CardHeader>
					<Title>Desculpe :(</Title>
				</CardHeader>
				<CardContent>
					<Description>Nenhum Curso Disponível</Description>
				</CardContent>
				<CardFooter>
					<Description>
						Você não possui cursos disponíveis.
					</Description>
				</CardFooter>
			</Card>
		);
	}

	function enterCourse(course) {
		return navigation.navigate("Course", { course });
	}

	function renderPrincipalImage(_principal) {
		if (!_principal) return <></>;
		if (!_principal.image[0]) return <></>;
		return <Image source={{ uri: _principal.image[0] }} />;
	}

	function renderPrincipalCourse() {
		if (!principal) return renderNoCourses();
		let _principal = courses.find(x => x.id == principal);
		return (
			<Card style={{
				transform: [{
					translateY: translateY.interpolate({
						inputRange: [-200, 0, 380],
						outputRange: [-50, 0, 380],
						extrapolate: 'clamp' //para o translate quando estrapolar os ranges
					}),
				}]
			}}>
				<CardHeader onPress={() => enterCourse(_principal)}>
					<Title>{_principal.name}</Title>
				</CardHeader>
				<CardContent onPress={() => enterCourse(_principal)}>
					{renderPrincipalImage(_principal)}
				</CardContent>
				<CardFooter onPress={() => enterCourse(_principal)}>
					<Description>{_principal.short_description}</Description>
				</CardFooter>
			</Card>
		);
	}


	return (
		<Container>
			<Loading visible={loading} />
			<Header />
			<Content>
				<Menu translateY={translateY} navigation={navigation} />
				<PanGestureHandler
					onGestureEvent={animatedEvent}
					onHandlerStateChange={onHandlerStateChange}
				>
					{renderPrincipalCourse()}
				</PanGestureHandler>
			</Content>
			<Tabs courses={courses} translateY={translateY} principal={principal} setPrincipal={setPrincipal} />
		</Container>
	);
}