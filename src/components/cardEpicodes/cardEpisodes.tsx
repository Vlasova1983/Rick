import { IHero } from "@/interfaces/hero.interface";
import { FC } from "react";
import styles from "./cardEpisodes.module.css";

const CardEpisodes:FC< {item: IHero}>=({item})=>{  
  console.log(item);
  return (
    <>
      <h2 className={styles.title}>Cast</h2>
      <div className={styles.wrapp} id={'residents'}></div>
    </>    
  );  
};


export default CardEpisodes;

