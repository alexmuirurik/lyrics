import React, { useCallback, useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Animated, RefreshControl, View } from 'react-native';
import DashboardLayout from '@/components/layouts/dashboardlayout';
import Songlist from '@/components/lists/songlist';
import { ToTitleCase } from '@/lib/routes';
import { useSearchContext } from '@/hooks/useSearch';
import { sampleSongs } from '@/constants/samplesongs';

const SearchScreen = () => {
    const [refreshing, setRefreshing] = useState(true)
    const { category } = useLocalSearchParams()
    const { search } = useSearchContext()
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    }, [])
    const songList = sampleSongs.filter(song => song.song.toLowerCase().includes(search.toLowerCase()))
    useEffect(() => { setTimeout(() => setRefreshing(false), 2000) }, [])
    return (
        <DashboardLayout>
            <Animated.ScrollView 
                showsVerticalScrollIndicator={false}
                refreshControl={ <RefreshControl className='bg-[#4758ba]' refreshing={refreshing} onRefresh={onRefresh} />}
                className={'rounded-xl overflow-hidden '}
            >
                <Songlist title='Search' songList={songList} />
            </Animated.ScrollView>
        </DashboardLayout>
    );
}

export default SearchScreen;
