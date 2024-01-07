import {NextPage } from 'next';
import Link from "next/link";
import Image from 'next/image';
import { IHeroData, f1 } from "@/interfaces/hero.interface";
import Card from "@/components/card/card";
import LoadMore from "@/components/loadMore/loadMore";
import styles from "./Character.module.css";


const Character:NextPage<{results:IHeroData,setPage:f1}> =({setPage,results})=>{ 

  return (
    <>       
      <Image            
        src="./characters.svg"
        alt="characters"           
        width={312}
        height={104}
        priority
      />      
      <div className={styles.wrapper}>
        { results.results.map(event=>(
        <Link className={styles.link} key={event.id} href={`/characters/${event.id}`}>        
          <Card item={event}/>
        </Link>))}   
      </div>
      <LoadMore setPage={setPage}/>            
    </>
  );
};
export default Character;



 
