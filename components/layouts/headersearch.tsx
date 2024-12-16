import React from 'react';
import { TextInput, View } from 'react-native';

const Headersearch = () => {
    return (
        <View className='flex-row items-center w-full py-2 pe-4'>
            <TextInput 
                className='text-gray-200 placeholder:text-gray-400 px-2 text-lg border border-[#5a73cd] rounded-md w-full' 
                placeholder='Search' 
            />
        </View>
    );
}

export default Headersearch;
