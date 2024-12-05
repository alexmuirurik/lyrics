import React from 'react';
import { AnimationType, INFINITE_ANIMATION_ITERATIONS, LatLng, LeafletView } from 'react-native-leaflet-view';
import WebView from 'react-native-webview'
import MapView, { UrlTile, WMSTile } from 'react-native-maps';
import DashboardLayout from '@/components/layouts/dashboardlayout';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Maphtml } from '@/components/maps/maphtml';

const IndexScreen = () => {
    return (
        <DashboardLayout>
            <View className='h-screen w-screen'>
                <WebView className='h-screen w-screen' source={{ html: Maphtml }} />
            </View>
            
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
