import Link from 'next/link';
import { FC } from "react";
import { useRouter } from 'next/router';
import styles from "./navigationMobile.module.css";

const NavigetionMobile:FC=()=>{ 
    const {query}=useRouter(); 
    return (            
        <nav className={styles.conteiner}>
            <Link className={styles.link} href={{pathname:`/characters`,query:{...query}}}>Character</Link>
            <Link  className={styles.link} href={{pathname:`/locations`,query:{...query}}}>Locations</Link>
            <Link  className={styles.link} href={{pathname:`/episodes`,query:{...query}}}>Episodes</Link> 
        </nav>      
    );      
};

export default NavigetionMobile;