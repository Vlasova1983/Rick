import { FC } from "react";
import Image from 'next/image';
import {  IHeroData, f1,f2 } from "@/interfaces/interface";
import Link from "next/link";
import Card from "@/components/card/card";
import LoadMore from "@/components/loadMore/loadMore";
import { useRouter } from 'next/router';
import  Input  from "@/components/inputSearch/inputSearh";
import styles from "./locations.module.css";

const Locations:FC<{results:IHeroData,setPage:f1,setValueName:f2}> =({results,setPage,setValueName})=>{ 
  const {query}=useRouter();
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
        <Input setValueName={setValueName}/>
      </div>   
    <div className={styles.wrapper}>
        {results.results.map(event=>(
        <Link className={styles.link} key={event.id} href={{pathname:`/locations/${event.id}`,query:{page:query.page,name:query.name}}}> 
          <Card  item={event}/>           
        </Link>))}   
      </div>        
      <LoadMore setPage={setPage}/>
    </>
  );
};
export default Locations;