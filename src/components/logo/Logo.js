import React from 'react';

import { Image } from 'native-base';

export default function Logo({ size }) {
    return <Image source={require('../../assets/Logo.png')} alt="Dollar sign" size={size} />;
}
