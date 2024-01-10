import Link from 'next/link';
import { FC } from "react";
import styles from "./navigationMobile.module.css";

const NavigetionMobile:FC=()=>{ 
    return (            
        <nav className={styles.conteiner}>
            <Link className={styles.link} href={{pathname:`/characters`,query:{page:1,name:''}}}>Character</Link>
            <Link  className={styles.link} href={{pathname:`/locations`,query:{page:1,name:''}}}>Locations</Link>
            <Link  className={styles.link} href={{pathname:`/episodes`,query:{page:1,name:''}}}>Episodes</Link> 
        </nav>                  
       
    );      
};

export default NavigetionMobile;