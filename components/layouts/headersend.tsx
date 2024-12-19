import React from 'react';
import { Link } from 'expo-router';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const Headersend = ({tintColor}: { tintColor: string }) => {
    return (
        <Link className='px-4' href={{ pathname: '/search' }}>
            <FontAwesome name='paper-plane' size={20} color={tintColor} className=' transform scale-y[-1]' />
        </Link>
    );
}

export default Headersend;
