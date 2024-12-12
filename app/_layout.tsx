import { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer'
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import Drawercomponent from '@/components/layouts/drawercomponent';
import 'react-native-reanimated';
import '@/global.css'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => { if (loaded) { SplashScreen.hideAsync() } }, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === 'dark' ? { ...DarkTheme, colors: { ...DarkTheme.colors, background: '#223869' } } : DefaultTheme}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Drawer 
					drawerContent={Drawercomponent}
					screenOptions={{
						drawerStyle: {
							backgroundColor: '#4758ba',
							borderRadius: 1,
							borderColor: '#5a73cd'
						},
						drawerItemStyle: {
							borderRadius: 10,
							borderColor: '#5a73cd',
							marginBottom: 10,
							borderWidth: 1
						},
						headerStyle: {
							backgroundColor: '#4758ba'
						},
						drawerActiveTintColor: 'white',
						drawerInactiveTintColor: 'lightgray'
					}}
				>
					<Drawer.Screen
						name="index"
						options={{
							title: 'Home',
							drawerIcon: ({ size, color }) => <FontAwesome name='home' size={size} color={color} />,
						}}
					/>
					<Drawer.Screen 
						name="kabuku/index" 
						options={{
							title: 'Kabuku',
							drawerIcon: ({ size, color }) => <FontAwesome name='book' size={size} color={color} />
						}}
					/>
					<Drawer.Screen 
						name="kiroho/index" 
						options={{
							title: 'Kiroho',
							drawerIcon: ({ size, color }) => <FontAwesome name='heart' size={size} color={color} />
						}}
					/>
					<Drawer.Screen 
						name="latest/index" 
						options={{
							title: 'Latest',
							drawerIcon: ({ size, color }) => <FontAwesome name='google' size={size} color={color} />
						}}
					/>
					<Drawer.Screen name="search" options={{ drawerItemStyle: { display: 'none' } }} />
				</Drawer>
			</GestureHandlerRootView>
			<StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={'#4758ba'} />
		</ThemeProvider>
	);
}
