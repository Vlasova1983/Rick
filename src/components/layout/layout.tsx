import {FC,PropsWithChildren} from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import styles from "./layout.module.css";


const Layout:FC<PropsWithChildren<unknown>>=({children})=>{
    return (
        <>
            <Header/>      
            <main className={styles.main}>{children}</main>
            <Footer/>    
        </>      
    );
};

export default Layout;