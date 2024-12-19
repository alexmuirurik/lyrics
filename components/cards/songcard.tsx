import { song } from '@/constants/samplesongs';
import { FontAwesome } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import React from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

const Songcard = ({ song }: { song: song }) => {
    return (
        <View  className='bg-[#1b2b60] flex-row justify-between items-center border border-[#5a73cd] rounded-md py-3 px-8'>
            <TouchableOpacity onPress={() => router.push({pathname: '/[single]', params: {single: song.song}})} className='w-11/12 space-y-3' >
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
            </TouchableOpacity>
            <TouchableOpacity className='px-8 flex-row items-center justify-center rounded-md' >
                <FontAwesome className='h-6 w-6' name='ellipsis-v' size={20} color={'white'} />
            </TouchableOpacity>
        </View>
    );
}

export default Songcard;
