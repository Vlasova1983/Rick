import { FC } from "react";
import Navigetion from './navigation/navigation';
import Logo from "./logo/logo";
import Burger from "./burger/burger";

import styles from "./header.module.css";


const Header:FC=()=>{
    return (
      <header className={styles.header}>
        <Logo/>
        <Navigetion/>
        <Burger/>                 
      </header>   
    );      
};

export default Header;