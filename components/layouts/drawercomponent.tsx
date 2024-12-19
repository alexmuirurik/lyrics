import React, { useCallback, useEffect, useState } from 'react';
import { Animated, Dimensions, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { routes } from '@/lib/routes';
import { FontAwesome } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';

const Drawercomponent = (props: any) => {
    const [refreshing, setRefreshing] = useState(true)
    const pathname = usePathname().split('/')
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    }, [])
    useEffect(() => { setTimeout(() => setRefreshing(false), 2000) }, [])
    return (
        <View className='flex-1'>
            <DrawerContentScrollView
                contentContainerStyle={styles.container}
                refreshControl={<RefreshControl className='bg-[#4758ba]' refreshing={refreshing} onRefresh={onRefresh} />}
                scrollEnabled={false}
                {...props}
            >
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
                    {routes.map(route => {
                        const home = (pathname[1] == '') && 'home'
                        const category = pathname[2] 
                        return <DrawerItem
                            {...props}
                            activeTintColor='white'
                            style={styles.drawer}
                            key={route.name}
                            label={route.title}
                            focused={route.title.toLowerCase() == home || route.title.toLowerCase() == category}
                            icon={({ color, size }) => <FontAwesome name={route.name} color={color} size={size} />}
                            onPress={() => router.navigate(route.link)}
                        />
                    })}
                </View>
                <View className=' bg-[#1b2b60] border border-[#5a73cd] rounded-xl p-6 w-full ms-auto '>
                    <View className='flex-row items-center gap-2 mb-4'>
                        <Image className='h-12 w-12 rounded-full' source={require('@/assets/images/alexmuiruri.jpg')} />
                        <View>
                            <Text className='text-gray-400 text-xl font-bold'>Software Dev: Alex Muiruri</Text>
                        </View>
                    </View>
                    <View className='border border-[#5a73cd] rounded-lg mb-4 p-4'>
                        <Animated.Text className='text-white'>
                            I have 3 years of coding experience with technologies such as ReactJS, NextJS, Django, and Laravel.
                        </Animated.Text>
                    </View>
                    <TouchableOpacity
                        className='bg-[#4758ba] border border-[#1b2b60] rounded-lg p-4 justify-center items-center '
                        onPress={() => router.navigate('https://alexmuiruri.com')}
                    >
                        <View className='flex-row items-center gap-2'>
                            <Text className='text-gray-200 text-xl font-bold'>Visit My Website</Text>
                            <FontAwesome name='external-link' color={'#e5e7eb'} size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: Dimensions.get('window').height
    },
    drawer: {
        borderRadius: 10,
        borderColor: '#5a73cd',
        marginBottom: 10,
        borderWidth: 1
    }
})

export default Drawercomponent;
