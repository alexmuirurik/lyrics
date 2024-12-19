import Categorycard from '@/components/cards/categorycard';
import DashboardLayout from '@/components/layouts/dashboardlayout';
import { MusicCategories } from '@/constants/Categories';
import React, { useCallback, useEffect, useState } from 'react';
import { Animated, RefreshControl, Text, View } from 'react-native';

const Categories = () => {
    const [refreshing, setRefreshing] = useState(true)
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    }, [])
    useEffect(() => { setTimeout(() => setRefreshing(false), 2000) }, [])
    return (
        <DashboardLayout>
            <View className='shadow-sm '>
                <View className='flex-row justify-between items-center ps-2 py-3'>
                    <Text className='text-gray-400 text-lg font-bold '>
                        Categories
                    </Text>
                </View>
                <Animated.FlatList
                    keyboardShouldPersistTaps={'handled'}
                    data={MusicCategories}
                    refreshControl={<RefreshControl className='bg-[#4758ba]' refreshing={refreshing} onRefresh={onRefresh} />}
                    renderItem={category => <Categorycard key={category.item.id} category={category.item} />}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                />
            </View>
        </DashboardLayout>
    );
}

export default Categories;
