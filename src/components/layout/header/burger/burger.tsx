import { FC, useState } from "react";
import Image from 'next/image';
import NavigetionMobile from "../navigation/navigationMobile";
import styles from "./burger.module.css";

const Burger:FC=()=>{
 const[isActive,setIsActive]=useState<boolean>(false);
    return ( 
        <button  className={styles.burger} onClick={()=>setIsActive(!isActive)}>        
            {!isActive &&<Image
                src="/menu_24px.svg"
                alt="menu_24px"           
                width={24}
                height={24}
                priority
            />}
            {isActive && 
            <div>           
                <Image
                    src="/close_24px.svg"
                    alt="menu_24px"           
                    width={24}
                    height={24}
                    priority
                />
                <NavigetionMobile/>           
            </div>            
            }
        </button>        
    );      
};

export default Burger;