import { FC } from "react";
import Image from 'next/image';
import {  IHeroData, f1 } from "@/interfaces/hero.interface";
import Link from "next/link";
import Card from "@/components/card/card";
import LoadMore from "@/components/loadMore/loadMore";
import styles from "./locations.module.css";

const Locations:FC<{results:IHeroData,setPage:f1}> =({results,setPage})=>{ 
  
  return (
    <> 
      <Image
        className={styles.images}
        src="./locations.svg"
        alt="locations"           
        width={220}
        height={135}
        priority
    />  

    <div className={styles.wrapper}>
        {results.results.map(event=>(
        <Link className={styles.link} key={event.id} href={`/locations/${event.id}`}> 
          <Card  item={event}/>           
        </Link>))}   
      </div>        
      <LoadMore setPage={setPage}/>
    </>
  );
};
export default Locations;