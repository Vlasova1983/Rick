import { FC, useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
import { IHeroData } from "@/services/interfaces/interface";
import { f1,f2 } from "@/services/type/type";
import Card from "@/components/card/card";
import Input from "@/components/inputSearch/inputSearh";
import LoadMore from "@/components/loadMore/loadMore";
import FilterButton from "../filtersButton/filterButton";
import Modal from "@/components/modal/modal";
import SelectBlock from "../selectBlock/selectBlock";
import styles from "./pages.module.css";

const Pages:FC<{results:IHeroData|string,setPage:f1,setValueName:f2,value:string,setValue:f2}> =({results,setPage,setValueName,value,setValue})=>{ 
  const {query}=useRouter();
  const { pathname } = useRouter(); 
  const[isActive,setIsActive]=useState<boolean>(false);  
       
  const changeIsActive=()=>{
    setIsActive(!isActive);
  };
 
  return (
    <> 
        {pathname===`/characters`&&
        <Image 
            className={styles.imgcharacters}       
            src="/characters.svg"
            alt="characters"           
            width={312}
            height={104}
            priority
        />        
        }
        {pathname==='/locations'&&
        <Image
            className={styles.imglocations}
            src="/locations.svg"
            alt="locations"           
            width={220}
            height={135}
            priority
        /> }
        {pathname===`/episodes`&& 
        <Image
            className={styles.imgepisides}
            src="/episode.svg"
            alt="episode"           
            width={220}
            height={135}
            priority
        />}
        {pathname===`/characters`&&
            <div className={styles.wrapper}>
                <Input value={value}  setValue={setValue}  setValueName={setValueName}/>
                <div className={styles.filter}>
                    <FilterButton isActive={isActive} changeIsActive={changeIsActive}/>
                </div>
                {isActive &&  
                <Modal changeIsActive={changeIsActive}>
                    <div className={styles.conteiner}>
                        <SelectBlock/>
                        <FilterButton  isActive={isActive} changeIsActive={changeIsActive}/> 
                    </div>                      
                </Modal> }
                <div className={styles.select}>
                    <SelectBlock/>
                </div>                         
            </div>
        }
        {pathname===`/locations`&&
            <div className={styles.wrapper}>
                <Input value={value}  setValue={setValue} setValueName={setValueName}/>
                <div className={styles.filter}>
                    <FilterButton isActive={isActive} changeIsActive={changeIsActive}/>
                </div>
                {isActive &&  
                <Modal changeIsActive={changeIsActive}>
                    <div className={styles.conteiner}>
                        <SelectBlock/>
                        <FilterButton  isActive={isActive} changeIsActive={changeIsActive}/>
                    </div>                    
                </Modal> }
                <div className={styles.select}>
                    <SelectBlock/>
                </div>                                        
            </div>
        }        
        {pathname===`/episodes`&&
            <div className={styles.wrapper}>
                <Input value={value}  setValue={setValue} setValueName={setValueName}/>                              
            </div>
        }        
        <div className={styles.wrapper}>
            { results ==='error' && <p>Nothing found for this search</p>}
            { pathname===`/characters`&&  typeof(results)!=='string'&& results.results.map(event=>(            
            <Link className={styles.link} key={event.id} href={{pathname:`/characters/${event.id}`,query:{...query}}}> 
                <Card  item={event}/>           
            </Link>))} 
             { pathname===`/locations`&& typeof(results)!=='string' &&  results.results.map(event=>(            
            <Link className={styles.link} key={event.id} href={{pathname:`/locations/${event.id}`,query:{...query}}}> 
                <Card  item={event}/>           
            </Link>))}  
            { pathname===`/episodes`&&   typeof(results)!=='string' && results.results.map(event=>(            
            <Link className={styles.link} key={event.id} href={{pathname:`/episodes/${event.id}`,query:{...query}}}> 
                <Card  item={event}/>           
            </Link>))}             
        </div>        
      <LoadMore setPage={setPage}/> 
    </>
  );
};
export default Pages;

  
  