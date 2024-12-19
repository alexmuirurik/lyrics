import React, { useCallback, useEffect, useState } from 'react';
import {  RefreshControl } from 'react-native';
import DashboardLayout from '@/components/layouts/dashboardlayout';
import Animated from 'react-native-reanimated';
import SliderList from '@/components/lists/sliderlist';
import Songlist from '@/components/lists/songlist';

const IndexScreen = () => {
    const [refreshing, setRefreshing] = useState(true)
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    }, [])
    useEffect(() => { setTimeout(() => setRefreshing(false), 2000) }, [])
    return (
        <DashboardLayout>
            <Animated.ScrollView 
                showsVerticalScrollIndicator={false}
                refreshControl={ <RefreshControl className='bg-[#4758ba]' refreshing={refreshing} onRefresh={onRefresh} />}
                className={'rounded-xl overflow-hidden '}
            >
                <SliderList /> 
                <Songlist />
            </Animated.ScrollView>
        </DashboardLayout>

    );
}

export default IndexScreen;
