import React from 'react';
import { Animated, Text, View } from 'react-native';
import LyricsSlider from '../cards/lyricsslider';
import { MusicCategories } from '@/constants/Categories';
import { Link } from 'expo-router';

const SliderList = () => {
    return (
        <View className='shadow-sm'>
            <View className='flex-row justify-between items-center px-2 py-3'>
                <Text className='text-gray-400 text-lg font-bold '>
                    Music Genres
                </Text>
                <Link href={'/categories'} className=' border border-[#5a73cd] rounded-lg py-2 px-4'>
                    <Text className='text-blue-400 text-sm font-bold font-magnumGothic italic'>
                        View More
                    </Text>
                </Link>
            </View>
            <Animated.FlatList
                data={MusicCategories}
                renderItem={item => <LyricsSlider key={item.item.id} category={item.item} />}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </View>
    );
}

export default SliderList;
