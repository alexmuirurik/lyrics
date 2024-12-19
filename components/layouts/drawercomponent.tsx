import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { routes } from '@/lib/routes';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

const Drawercomponent = (props: any) => {
    return (
        <View className='flex-1'>
            <DrawerContentScrollView className='flex-1 flex flex-col justify-between items-end rounded-sm' scrollEnabled={false}>
                <View className=''>
                    <View className='border-b border-[#5a73cd] rounded-lg mb-4'>
                        <View className='bg-[#1b2b60] flex-row items-center gap-1 border border-[#5a73cd] rounded-lg ps-1 py-0 pe-16'>
                            <Image className='h-12 w-12' source={require('@/assets/images/splash-icon.png')} />
                            <Text className='text-gray-500 text-xl font-bold font-poppins'>
                                Gospel Lyrics
                            </Text>
                        </View>
                        <View className='py-4 mb-4'>
                            <Text className='text-xs text-gray-300'>
                                Latest Kikuyu Song Lyrics
                            </Text>
                        </View>
                    </View>
                    <DrawerItemList {...props} />
                    {routes.map(route =>
                        <DrawerItem
                            {...props}
                            style={styles.drawer}
                            key={route.name}
                            label={route.title}
                            icon={({ color, size }) => <FontAwesome name={route.name} color={color} size={size} />}
                            onPress={() => router.navigate(route.link)}
                        />
                    )}
                </View>
                <View className=' bg-[#1b2b60] border border-[#5a73cd] rounded-xl p-6 w-full h-72 mt-40'>
                    <Text className='text-white'>
                        fddf
                    </Text>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawer: {
        borderRadius: 10,
        borderColor: '#5a73cd',
        marginBottom: 10,
        borderWidth: 1
    }
})

export default Drawercomponent;
