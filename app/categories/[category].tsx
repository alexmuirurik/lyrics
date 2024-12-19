import React, { useCallback, useEffect, useState } from 'react';
import {  RefreshControl } from 'react-native';
import DashboardLayout from '@/components/layouts/dashboardlayout';
import Animated from 'react-native-reanimated';
import { useLocalSearchParams } from 'expo-router';
import Songlist from '@/components/lists/songlist';

const IndexScreen = () => {
    const [refreshing, setRefreshing] = useState(true)
    const { category } = useLocalSearchParams()
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    }, [])
    useEffect(() => { setTimeout(() => setRefreshing(false), 1000) }, [])
    return (
        <DashboardLayout>
            <Animated.ScrollView 
                showsVerticalScrollIndicator={false}
                refreshControl={ <RefreshControl className='bg-[#4758ba]' refreshing={refreshing} onRefresh={onRefresh} />}
                className={'rounded-xl overflow-hidden '}
            >
                <Songlist />
            </Animated.ScrollView>
        </DashboardLayout>

    );
}

export default IndexScreen;
