import React, { useCallback, useEffect, useState } from 'react';
import DashboardLayout from '@/components/layouts/dashboardlayout';
import { Text, View, Image, Pressable, RefreshControl } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { sampleSongs } from '@/constants/samplesongs';
import Animated from 'react-native-reanimated';
import WebView from 'react-native-webview'

const Single = () => {
    const [language, setLanguage] = useState('english')
    const { single } = useLocalSearchParams()
    const song = sampleSongs.find(song => song.song === single)
    const [refreshing, setRefreshing] = useState(true)
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    }, [])
    useEffect(() => { setTimeout(() => setRefreshing(false), 2000) }, [])
    return (
        <DashboardLayout>
            <Animated.ScrollView 
                className='rounded-xl' 
                refreshControl={<RefreshControl className='bg-[#4758ba]' refreshing={refreshing} onRefresh={onRefresh} />}
                showsVerticalScrollIndicator={false}
            >
                <View className='relative bg-[#1b2b60] border border-[#5a73cd] rounded-xl overflow-hidden'>
                    <Image className='h-72 w-screen -z-10' source={require('@/assets/images/music.categories/reggae.jpg')} />
                    <View className='absolute rounded-xl h-full w-full overflow-hidden z-0'>
                        <WebView
                            className='flex-1'
                            cacheEnabled
                            source={{ uri: 'https://www.youtube.com/embed/UBqfGeciXas?si=ZwuX-jL6yo7Se-no' }}
                            scalesPageToFit
                            javaScriptEnabled
                            scrollEnabled={false}
                        />
                    </View>
                </View>
                <View className='flex-row justify-between items-center px-2 py-3'>
                    <Text className='text-gray-400 text-lg font-bold '>
                        {song?.song}
                    </Text>
                </View>
                <View className=''>
                    <View className='flex-row justify-between items-center'>
                        <Pressable
                            style={{ backgroundColor: language === 'english' ? '#1b2b60' : 'transparent' }}
                            className='border-x border-t border-[#5a73cd] rounded-t-lg w-1/3 px-8 py-2'
                            onPress={() => setLanguage('english')}
                        >
                            <Text className={`${language == 'english' ? 'text-gray-200' : 'text-gray-400'} text-lg font-bold`}>
                                English
                            </Text>
                        </Pressable>
                        <Pressable
                            style={{ backgroundColor: language === 'swahili' ? '#1b2b60' : 'transparent' }}
                            className='border-x border-t border-[#5a73cd] rounded-t-lg w-1/3 px-8 py-2'
                            onPress={() => setLanguage('swahili')}
                        >
                            <Text className={`${language == 'swahili' ? 'text-gray-200' : 'text-gray-400'} text-lg font-bold`}>
                                Swahili
                            </Text>
                        </Pressable>
                        <Pressable
                            style={{ backgroundColor: language === 'kikuyu' ? '#1b2b60' : 'transparent' }}
                            className=' border-x border-t border-[#5a73cd] rounded-t-lg w-1/3 px-8 py-2'
                            onPress={() => setLanguage('kikuyu')}
                        >
                            <Text className={`${language == 'kikuyu' ? 'text-gray-200' : 'text-gray-400'} text-lg font-bold`}>
                                Kikuyu
                            </Text>
                        </Pressable>
                    </View>
                    <View className='bg-[#1b2b60] border-x border-b border-[#5a73cd] shadow-sm rounded-b-xl p-4'>
                        <Animated.Text className='text-gray-300 text-lg leading-5'>
                            {song?.lyrics}
                        </Animated.Text>
                    </View>
                </View>
            </Animated.ScrollView>
        </DashboardLayout>
    );
}

export default Single;
