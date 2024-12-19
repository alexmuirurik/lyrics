import { MusicCategory } from '@/constants/Categories';
import { ToTitleCase } from '@/lib/routes';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Categorycard = ({ category }: { category: MusicCategory }) => {
    return (
        <TouchableOpacity
            className='bg-[#1b2b60] flex-row items-center gap-3 border border-gray-400 rounded-md w-full p-4 mb-2'
            onPress={() => router.navigate({ pathname: '/categories/[category]', params: { category: category.title } })}
        >
            <View className='bg-[#1c2c5c] border border-gray-600 justify-center items-center rounded-xl w-12 h-12'>
               <FontAwesome name='folder-open' size={20} color={'white'} /> 
            </View>
            <View className='flex-row items-center gap-2'>
                <Text className='text-gray-300 text-lg font-bold font-poppins'>
                    {ToTitleCase(category.title)}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default Categorycard;
