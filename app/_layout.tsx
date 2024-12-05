import { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';
import '@/global.css'
import HeaderSection from '@/components/layouts/headersection';

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
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack> 
				<Stack.Screen name="index" options={{ header: () => <HeaderSection /> }} />
				<Stack.Screen name="kabuku/index" options={{ headerShown: false }} />
				<Stack.Screen name="kiroho/index" options={{ headerShown: false }} />
				<Stack.Screen name="latest/index" options={{ headerShown: false }} />
				<Stack.Screen name="search" options={{ headerShown: false }} />
			</Stack>
			<StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={'lightgray'} />
		</ThemeProvider>
	);
}
