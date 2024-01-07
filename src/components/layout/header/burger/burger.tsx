import { FC } from "react";
import Image from 'next/image';
import Link from "next/link";
import styles from "./burger.module.css";

const Burger:FC=()=>{
    return ( 
        <Link  className={styles.burger} href={'/'}>        
            <Image
                src="/menu_24px.svg"
                alt="menu_24px"           
                width={24}
                height={24}
                priority
            />   
        </Link>        
    );      
};

export default Burger;