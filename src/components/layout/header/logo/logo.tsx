import { FC } from "react";
import Image from 'next/image';
import Link from "next/link";


const Logo:FC=()=>{
    return ( 
        <Link  href={{pathname:`/`}}>
            <Image
                src="/logo-black.svg"
                alt="logo-black"           
                width={49}
                height={46}
                priority
            />       
        </Link>       
    ) ;     
};

export default Logo;