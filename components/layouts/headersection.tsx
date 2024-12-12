import React, { useState } from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Animated, View, Text, Pressable } from 'react-native';

const HeaderSection = () => {
    const [drawerOpen, setDrawerOpen] = useState(true)
    return (
        <Animated.View className={'bg-[#4758ba] flex-row justify-between items-center px-4 pt-2 pb-3'}>
            <View className='flex-row items-center gap-4'>
                <Pressable onPress={() => setDrawerOpen(!drawerOpen)}>
                    <AntDesign name={'bars'} size={25} color={'white'} />
                </Pressable>
                <Text className='text-white text-lg font-bold'>
                    Very Good
                </Text>
            </View>
            <View className='flex-row items-center gap-3'>
                <Pressable onPress={() => setDrawerOpen(!drawerOpen)}>
                    <FontAwesome name='ellipsis-v' size={25} color={'white'} />
                </Pressable>
            </View>
        </Animated.View>
    );
}

export default HeaderSection;
