import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Animated, View, Text, Pressable } from 'react-native';

const HeaderSection = () => {
    const [drawerOpen, setDrawerOpen] = useState(true)
    return (
        <Animated.View className={'bg-[lightgray] flex-row justify-between items-center px-4 pt-2 pb-3'}>
            <View className='flex-row items-center gap-4'>
                <Pressable onPress={() => setDrawerOpen(!drawerOpen)}>
                    <FontAwesome name={drawerOpen ? 'bookmark' : 'bars'} size={25} color={'black'} />
                </Pressable>
                <Text className='text-black text-lg font-bold'>
                    Very Good
                </Text>
            </View>
            <View className='flex-row items-center gap-3'>
                <Pressable onPress={() => setDrawerOpen(!drawerOpen)}>
                    <FontAwesome name='ellipsis-v' size={25} color={'black'} />
                </Pressable>
            </View>
        </Animated.View>
    );
}

export default HeaderSection;
