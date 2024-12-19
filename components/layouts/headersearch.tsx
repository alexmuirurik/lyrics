import React, { useCallback, useEffect, useRef } from 'react';
import { TextInput, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSearchContext } from '@/hooks/useSearch';

const Headersearch = () => {
    const inputRef = useRef<TextInput>(null);
    const { search, setSearch } = useSearchContext()
    const onPageLayout = useCallback(() => inputRef.current?.focus(), []);
    useEffect(() => inputRef.current?.focus(), [inputRef, search ])
    return (
        <View onLayout={onPageLayout} onTouchStart={onPageLayout} className='flex-row items-center w-full py-2 pe-4'>
            <TextInput
                ref={inputRef}
                autoFocus
                className='text-gray-200 placeholder:text-gray-400 px-2 text-lg border border-[#5a73cd] rounded-md w-full'
                placeholder='Search'
                onChangeText={(text) => setSearch(text)}
            />
        </View>
    );
}

export default Headersearch;
