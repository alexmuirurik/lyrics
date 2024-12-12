import React from 'react';
import { Dimensions, FlatList, Platform, ScrollView, StyleSheet, View } from 'react-native';
import DashboardLayout from '@/components/layouts/dashboardlayout';
import LyricsSlider from '@/components/cards/lyricsslider';

const IndexScreen = () => {
    const lyrics = [{ id: 1 }]
    return (
        <DashboardLayout>
            <View>
                <FlatList data={lyrics} renderItem={item => <LyricsSlider key={item.item.id} />} />
            </View>
            <ScrollView className='h-screen w-screen'>

            </ScrollView>
        </DashboardLayout>

    );
}

const styles = StyleSheet.create({
    map: {
        height: 700,
        width: 300
    }
})

export default IndexScreen;
