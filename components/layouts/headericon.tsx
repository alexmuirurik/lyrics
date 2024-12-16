import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';

const Headericon = ({tintColor}: {tintColor?: string}) => {
    return (
        <Link className='px-4' href={{pathname: '/search'}}>
           <AntDesign name='search1' size={20} color={tintColor} className=' transform scale-y[-1]' />
        </Link>
    );
}

export default Headericon;
