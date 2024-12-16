import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { TextInput, View } from 'react-native';

const Headerback = ({tintColor}: {tintColor?: string}) => {
    return (
        <Link className='px-4' href={{ pathname: '/' }}>
            <AntDesign name='arrowleft' size={20} color={tintColor} className=' transform scale-y[-1]' />
        </Link>
    );
}

export default Headerback;
