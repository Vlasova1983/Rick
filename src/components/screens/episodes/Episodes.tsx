import { FC } from "react";
import { IHeroData, f1 } from "@/interfaces/hero.interface";
import Link from "next/link";
import Card from "@/components/card/card";
import Image from "next/image";
import LoadMore from "@/components/loadMore/loadMore";
import styles from "./Episodes.module.css";

const Episodes:FC<{results:IHeroData,setPage:f1 }> =({results,setPage})=>{
  
  return (
    <> 
      <Image
        className={styles.images}
        src="./episode.svg"
        alt="episode"           
        width={220}
        height={135}
        priority
      />  

      <div className={styles.wrapper}>
          {results.results.map(event=>(
          <Link className={styles.link} key={event.id} href={`/episodes/${event.id}`}> 
            <Card  item={event}/>           
          </Link>))}   
      </div>        
      <LoadMore setPage={setPage}/> 
    </>
  );
};
export default Episodes;