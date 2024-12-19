import React from 'react';
import DashboardLayout from '@/components/layouts/dashboardlayout';
import { Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { sampleSongs } from '@/constants/samplesongs';
import Animated from 'react-native-reanimated';
import WebView from 'react-native-webview'

const Single = () => {
    const { single } = useLocalSearchParams()
    const song = sampleSongs.find(song => song.song === single)
    return (
        <DashboardLayout>
            <View className='relative bg-[#1b2b60] border border-[#5a73cd] rounded-xl overflow-hidden'>
                <Image className='h-72 w-screen -z-10' source={require('@/assets/images/music.categories/reggae.jpg')} />
                <View className='absolute rounded-xl h-full w-full overflow-hidden z-0'>
                    <WebView 
                        style={styles.youtube}
                        source={{uri: 'https://www.youtube.com/embed/Aja2KfuoqGA?si=SyJKr3qyIVzcitQy'}}
                        javaScriptEnabled
                    />
                </View>
            </View>
            <View className='flex-row justify-between items-center px-2 py-3'>
                <Text className='text-gray-400 text-lg font-bold '>
                    {song?.song}
                </Text>
            </View>
            <Animated.ScrollView showsVerticalScrollIndicator={false} className='bg-[#1b2b60] border border-[#5a73cd] shadow-sm rounded-xl pb-4'>
                <View className='h-full p-4'>
                    <Animated.Text allowFontScaling className='text-gray-300 text-lg leading-5'>
                        {song?.lyrics}
                    </Animated.Text>
                </View>
            </Animated.ScrollView>
        </DashboardLayout>
    );
}

const styles = StyleSheet.create({
    youtube: {
        height: '100%',
        width: Dimensions.get('screen').width,
        objectFit: 'cover'
    }
})

export default Single;
