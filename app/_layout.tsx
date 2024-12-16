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

SplashScreen.preventAutoHideAsync()
const RootLayout = () => {
	const colorScheme = useColorScheme();
	const hash = usePathname().split('#')[1] ?? 'Home'
	const [loaded] = useFonts(fonts);
	useEffect(() => { if (loaded) { SplashScreen.hideAsync() }}, [loaded]);
	if (!loaded) { return null }

	return (
		<ThemeProvider value={colorScheme === 'dark' ? { ...DarkTheme, colors: { ...DarkTheme.colors, background: '#4758ba' } } : DefaultTheme}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<Drawer 
					drawerContent={Drawercomponent}
					screenOptions={{
						headerRight: ({tintColor}) => <Headericon tintColor={tintColor} />,
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
							headerTitle: () => <Text className='text-gray-200 text-2xl font-bold capitalize'>{hash}</Text>,
							drawerItemStyle: { 
								display: 'none' 
							} 
						}}    
					/>
					<Drawer.Screen 
						name="search" 
						options={{ 
							headerTitle: () => <Headersearch />,
							headerLeft: ({tintColor}) => <Headerback tintColor={tintColor} />,
							headerRight: () => '',
							drawerItemStyle: { 
								display: 'none' 
							} 
						}} 
					/>
					<Drawer.Screen 
						name='categories' 
						options={{ 
							title: 'Categories',
							drawerItemStyle: { 
								display: 'none' 
							} 
						}} 
					/>
					<Drawer.Screen 
						name="[single]" 
						options={{ 
							title: 'Single',
							drawerItemStyle: { 
								display: 'none' 
							} 
						}} 
					/>
				</Drawer>
			</GestureHandlerRootView>
			<StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={'#4758ba'} />
		</ThemeProvider>
	);
}

export default RootLayout