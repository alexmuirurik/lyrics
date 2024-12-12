import React from 'react';
import { Image, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

const Drawercomponent = (props: any) => {
    return (
        <View className='flex-1'>
            <DrawerContentScrollView className='rounded-sm' scrollEnabled={false}>
                <View className='border-b border-[#5a73cd] rounded-lg mb-4'>
                    <View className='bg-[#1b2b60] flex-row items-center gap-1 border border-[#5a73cd] rounded-lg ps-1 py-0 pe-16'>
                        <Image className='h-12 w-12' source={require('@/assets/images/splash-icon.png')} />
                        <Text className='text-gray-500 text-xl font-bold font-poppins'>
                            Kikuyu Lyrics
                        </Text>
                    </View>
                    <View className='py-4 mb-4'>
                        <Text className='text-xs text-gray-300'>
                            Latest Kikuyu Song Lyrics
                        </Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
                
            </DrawerContentScrollView>
        </View>
    );
}

export default Drawercomponent;
