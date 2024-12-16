import { sampleSongs } from '@/constants/samplesongs';
import React from 'react';
import { Animated, Text, View } from 'react-native';
import Songcard from '../cards/songcard';
import { Link } from 'expo-router';

const Songlist = ({ showView }: { showView: boolean }) => {
    return (
        <View className='shadow-sm '>
            <View className='flex-row justify-between items-center px-2 py-3'>
                <Text className='text-gray-400 text-lg font-bold '>
                    Popular Songs
                </Text>
                {showView &&
                    <Link href='/#popular' className=' border border-[#5a73cd] rounded-lg py-2 px-4'>
                        <Text className='text-blue-400 text-sm font-bold font-magnumGothic italic'>
                            View More
                        </Text>
                    </Link>
                }
            </View>
            <Animated.FlatList
                data={sampleSongs}
                renderItem={song => <Songcard key={song.item.song} song={song.item} />}
                scrollEnabled={false}
            />
        </View>
    );
}

export default Songlist;
