import React from 'react';
import { Image, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { MusicCategory } from '@/constants/Categories';

const LyricsSlider = ({ category }: { category: MusicCategory }) => {
    return (
        <View className='justify-center items-center rounded-3xl me-4 overflow-hidden'>
            <Image className='h-72 w-96' source={require('@/assets/images/music.categories/reggae.jpg')} />
            <View className='absolute bg-black opacity-70 justify-center items-center w-full h-full'>
                <Link
                    href={{
                        pathname: '/categories/[category]',
                        params: { category: category.title }
                    }}
                    className='text-center align-middle w-full h-full'
                >
                    <Text className='text-white text-4xl font-bold'>
                        {category.title}
                    </Text>
                </Link>
            </View>
        </View>
    );
}

export default LyricsSlider;
