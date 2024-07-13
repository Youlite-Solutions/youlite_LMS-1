import React from 'react';
import Image from "next/image";
const Logo = () => {
    return (
        <div>
            <Image width={120} height={120} src="/logo.jpeg" alt="logo" />
        </div>
    );
};

export default Logo;