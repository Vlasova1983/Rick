import { FC } from "react";
import Image from 'next/image';


const Logo:FC=()=>{
    return (     
        <Image
            src="/logo-black.svg"
            alt="logo-black"           
            width={49}
            height={46}
            priority
        />   
    ) ;     
};

export default Logo;