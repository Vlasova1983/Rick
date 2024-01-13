import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from "react";
import styles from "./navigetion.module.css";

const Navigetion:FC=()=>{
    const {pathname,query}=useRouter();
    return (            
        <nav className={styles.conteiner}>
            <Link className={pathname==='/characters'?styles.active:styles.link} href={{pathname:`/characters`,query:{...query}}}>Character</Link>
            <Link  className={pathname==='/locations'?styles.active:styles.link} href={{pathname:`/locations`,query:{...query}}}>Locations</Link>
            <Link  className={pathname==='/episodes'?styles.active:styles.link} href={{pathname:`/episodes`,query:{...query}}}>Episodes</Link> 
        </nav>                  
       
    );      
};

export default Navigetion;