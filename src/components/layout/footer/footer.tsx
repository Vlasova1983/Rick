import { FC } from "react";
import styles from "./footer.module.css";


const Footer:FC=()=>{
    return (
        <footer className={styles.footer}>
            <h3 className={styles.text}>Make with ❤️ for the MobProgramming team</h3>                              
        </footer>   
    );      
};

export default  Footer;