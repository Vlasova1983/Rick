import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from "react";
import styles from "./navigetion.module.css";

const Navigetion:FC=()=>{
    const {pathname}=useRouter();
    return (            
        <nav className={styles.conteiner}>
            <Link className={pathname==='/characters'?styles.active:styles.link} href={{pathname:`/characters`,query:{page:1,name:''}}}>Character</Link>
            <Link  className={pathname==='/locations'?styles.active:styles.link} href={{pathname:`/locations`,query:{page:1,name:''}}}>Locations</Link>
            <Link  className={pathname==='/episodes'?styles.active:styles.link} href={{pathname:`/episodes`,query:{page:1,name:''}}}>Episodes</Link> 
        </nav>                  
       
    );      
};

export default Navigetion;