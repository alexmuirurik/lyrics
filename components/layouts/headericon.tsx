import React from 'react';
import { Image, View } from 'react-native';

const Headericon = () => {
    return (
        <View>
            <Image source={require('@/assets/images/splash-icon.png')} />
        </View>
    );
}

export default Headericon;
