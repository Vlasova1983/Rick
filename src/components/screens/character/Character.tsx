import {NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from 'next/image';
import { IHeroData, f1,f2 } from "@/interfaces/interface";
import Card from "@/components/card/card";
import LoadMore from "@/components/loadMore/loadMore";
import  Input  from "@/components/inputSearch/inputSearh";
import styles from "./Character.module.css";


const Character:NextPage<{results:IHeroData,setPage:f1,setValueName:f2}> =({setPage,results,setValueName})=>{
  const {query}=useRouter(); 
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
        <Input setValueName={setValueName}/>
      </div>          
      <div className={styles.wrapper}>
        { results.results.map(event=>(
        <Link className={styles.link} key={event.id} href={{pathname:`/characters/${event.id}`,query:{page:query.page,name:query.name}}}>        
          <Card item={event}/>
        </Link>))}   
      </div>
      <LoadMore setPage={setPage}/>            
    </>
  );
};
export default Character;



 
