import { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer'
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import Drawercomponent from '@/components/layouts/drawercomponent';
import { useLocalSearchParams, usePathname } from 'expo-router';
import { fonts } from '@/lib/fonts';
import 'react-native-reanimated';
import '@/global.css'
import Headericon from '@/components/layouts/headericon';
import Headersearch from '@/components/layouts/headersearch';
import Headerback from '@/components/layouts/headerback';
import { routes, ToTitleCase } from '@/lib/routes';
import { SearchContextProvider } from '@/hooks/useSearch';

SplashScreen.preventAutoHideAsync()
const RootLayout = () => {
	const colorScheme = useColorScheme();
	const hash = usePathname().split('/')
	const [loaded] = useFonts(fonts);
	useEffect(() => { if (loaded) { SplashScreen.hideAsync() } }, [loaded]);
	if (!loaded) { return null }

	return (
		<ThemeProvider value={colorScheme === 'dark' ? { ...DarkTheme, colors: { ...DarkTheme.colors, background: '#4758ba' } } : DefaultTheme}>
			<SearchContextProvider>
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
								backgroundColor: '#4758ba',
								borderColor: '#5a73cd'
							},
							drawerActiveTintColor: 'white',
							drawerInactiveTintColor: 'lightgray'
						}}
					>
						<Drawer.Screen
							name="index"
							options={{
								title: 'Home',
								headerRight: ({ tintColor }) => <Headericon tintColor={tintColor} />,
								drawerItemStyle: {
									display: 'none'
								}
							}}
						/>
						<Drawer.Screen
							name='categories/[category]'
							options={{
								title: ToTitleCase(hash[2]),
								headerRight: ({ tintColor }) => <Headericon tintColor={tintColor} />,
								drawerItemStyle: {
									display: 'none'
								}
							}}
						/>
						<Drawer.Screen
							name="search"
							options={{
								headerLeft: ({ tintColor }) => <Headerback tintColor={tintColor} />,
								headerTitle: () => <Headersearch />,
								drawerItemStyle: {
									display: 'none'
								}
							}}
						/>
						<Drawer.Screen
							name='categories/index'
							options={{
								title: 'Categories',
								headerLeft: ({ tintColor }) => <Headerback tintColor={tintColor} />,
								headerRight: ({ tintColor }) => <Headericon tintColor={tintColor} />,
								drawerItemStyle: {
									display: 'none'
								}
							}}
						/>
						<Drawer.Screen
							name="[single]"
							options={{
								title: ToTitleCase(hash[1]),
								headerLeft: ({ tintColor }) => <Headerback tintColor={tintColor} />,
								headerRight: ({ tintColor }) => <Headericon tintColor={tintColor} />,
								drawerItemStyle: {
									display: 'none'
								}
							}}
						/>
					</Drawer>
				</GestureHandlerRootView>
			</SearchContextProvider>
			<StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={'#4758ba'} />
		</ThemeProvider>
	);
}

export default RootLayout