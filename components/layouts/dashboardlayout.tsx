import React, { ReactNode } from 'react';
import { Animated } from 'react-native';

const DashboardLayout = ({children}: {children: ReactNode}) => {
    return (
        <Animated.View className='px-4'>
            {children}
        </Animated.View>
    );
}

export default DashboardLayout;
