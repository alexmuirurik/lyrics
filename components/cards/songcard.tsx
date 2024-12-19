import { song } from '@/constants/samplesongs';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

const Songcard = ({ song }: { song: song }) => {
    const [favorite, setFavorite] = useState(false)
    return (
        <View  className='bg-[#1b2b60] flex-row items-center border border-[#5a73cd] rounded-md py-3 px-4'>
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
            <TouchableOpacity 
                className='px-8 flex-row items-center justify-center rounded-md w-1/12' 
                onPress={() => setFavorite(!favorite)}
            >
                <FontAwesome  className='h-6 w-6' name='heartbeat' size={20} color={favorite ? '#f99' : 'white'} />
            </TouchableOpacity>
        </View>
    );
}

export default Songcard;
