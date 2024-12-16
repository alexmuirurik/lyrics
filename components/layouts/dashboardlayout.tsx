import React, { ReactNode } from 'react';
import { Animated } from 'react-native';


const DashboardLayout = ({children}: {children: ReactNode}) => {
    return (
        <Animated.View className='flex-1 shadow-sm p-2'>
            {children}
        </Animated.View>
    );
}

export default DashboardLayout;
