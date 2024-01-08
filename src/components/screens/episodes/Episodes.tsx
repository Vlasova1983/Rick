import { FC } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
import { IHeroData, f1,f2 } from "@/interfaces/interface";
import Card from "@/components/card/card";
import  Input  from "@/components/inputSearch/inputSearh";
import LoadMore from "@/components/loadMore/loadMore";
import styles from "./Episodes.module.css";

const Episodes:FC<{results:IHeroData,setPage:f1,setValueName:f2 }> =({results,setPage,setValueName})=>{
  const {query}=useRouter();
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
        <Input setValueName={setValueName}/>
      </div>  
      <div className={styles.wrapper}>
          {results.results.map(event=>(
          <Link className={styles.link} key={event.id} href={{pathname:`/episodes/${event.id}`,query:{page:query.page,name:query.name}}}> 
            <Card  item={event}/>           
          </Link>))}   
      </div>        
      <LoadMore setPage={setPage}/> 
    </>
  );
};
export default Episodes;