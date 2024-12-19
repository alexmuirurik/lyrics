import { MusicCategory } from '@/constants/Categories';
import { ToTitleCase } from '@/lib/routes';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Categorycard = ({ category }: { category: MusicCategory }) => {
    return (
        <TouchableOpacity
            className='bg-[#1b2b60] flex-row items-center gap-3 border border-gray-400 rounded-md w-full p-5 mb-2'
            onPress={() => router.navigate({ pathname: '/categories/[category]', params: { category: category.title } })}
        >
            <FontAwesome name='folder-open' size={20} color={'white'} />
            <View className='flex-row items-center gap-2'>
                <Text className='text-gray-300 text-base font-semibold font-poppins'>
                    {ToTitleCase(category.title)}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default Categorycard;
