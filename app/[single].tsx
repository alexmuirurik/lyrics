import React, { useRef } from 'react';
import DashboardLayout from '@/components/layouts/dashboardlayout';
import { PanResponder, Animated as Animate, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { sampleSongs } from '@/constants/samplesongs';
import Animated from 'react-native-reanimated';

const Single = () => {
    const { single } = useLocalSearchParams()
    const song = sampleSongs.find(song => song.song === single)
    return (
        <DashboardLayout>
            <Animated.ScrollView showsVerticalScrollIndicator={false} className='shadow-sm rounded-xl overflow-hidden pb-4'>
                <View className='flex-row justify-between items-center px-2 py-3'>
                    <Text className='text-gray-400 text-lg font-bold '>
                        {song?.song}
                    </Text>
                </View>
                <View className='bg-[#1b2b60] border border-[#5a73cd] rounded-xl h-full overflow-scroll p-4'>
                    <Animated.Text className='text-gray-300 text-lg leading-5'>
                        {song?.lyrics}
                    </Animated.Text>
                </View>
            </Animated.ScrollView>
        </DashboardLayout>
    );
}

export default Single;
