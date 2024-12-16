import { song } from '@/constants/samplesongs';
import { FontAwesome } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import React from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

const Songcard = ({ song }: { song: song }) => {
    return (
        <TouchableOpacity 
            onPress={() => router.push({pathname: '/[single]', params: {single: song.song}})}
            className='bg-[#1b2b60] flex-row justify-between items-center border border-[#5a73cd] rounded-md py-3 px-8'
        >
            <View className='space-y-3' >
                <View>
                    <Text className='text-white'>
                        {song.song}
                    </Text>
                    <View className='py-2'>
                        <Text className='text-gray-400 text-sm'>
                            Christian Mululu
                        </Text>
                    </View>
                </View>
            </View>
            <FontAwesome name='ellipsis-v' size={20} color={'gray'} />
        </TouchableOpacity>
    );
}

export default Songcard;
