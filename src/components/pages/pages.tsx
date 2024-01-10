import { FC } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
import { IHeroData, f1,f2 } from "@/interfaces/interface";
import Card from "@/components/card/card";
import Input from "@/components/inputSearch/inputSearh";
import LoadMore from "@/components/loadMore/loadMore";
import styles from "./pages.module.css";
import Select from "@/components/select/select";


const Pages:FC<{results:IHeroData,setPage:f1,setValueName:f2}> =({results,setPage,setValueName})=>{ 
  const {query}=useRouter();
  const { pathname } = useRouter(); 
  return (
    <> 
        {pathname===`/characters`&&
        <Image 
            className={styles.imgcharacters}       
            src="./characters.svg"
            alt="characters"           
            width={312}
            height={104}
            priority
        />        
        }
        {pathname==='/locations'&&
        <Image
            className={styles.imglocations}
            src="./locations.svg"
            alt="locations"           
            width={220}
            height={135}
            priority
        /> }
        {pathname===`/episodes`&& 
        <Image
            className={styles.imgepisides}
            src="./episode.svg"
            alt="episode"           
            width={220}
            height={135}
            priority
        />}
        {pathname===`/characters`&&
            <div className={styles.wrapper}>
                <Input setValueName={setValueName}/>
                <div className={styles.select}>
                    <Select name={'species'} array={['Species','Human']}/>
                </div>
                <div className={styles.select}>
                    <Select name={'gender'} array={['Gender','female','male','genderless','unknown']}/>
                </div>
                <div className={styles.select}>
                    <Select name={'status'} array={['Status','alive','dead','unknown']}/>
                </div>               
            </div>
        }
        {pathname===`/locations`&&
            <div className={styles.wrapper}>
                <Input setValueName={setValueName}/>
                <div className={styles.select}>
                    <Select name={'type'} array={['type','Planet']}/>
                </div>
                <div className={styles.select}>
                    <Select name={'dimension'} array={['Dimension','Dimension C-137']}/>
                </div>                              
            </div>
        }        
        {pathname===`/episodes`&&
            <div className={styles.wrapper}>
                <Input setValueName={setValueName}/>                              
            </div>
        }        
        <div className={styles.wrapper}>
            { pathname===`/characters`&& results.results.map(event=>(            
            <Link className={styles.link} key={event.id} href={{pathname:`/characters/${event.id}`,query:{page:query.page,name:query.name}}}> 
                <Card  item={event}/>           
            </Link>))}  
            { pathname==='/locations'&& results.results.map(event=>(            
            <Link className={styles.link} key={event.id}  href={{pathname:`/locations/${event.id}`,query:{page:query.page,name:query.name}}}> 
                <Card  item={event}/>           
            </Link>))}  
            { pathname===`/episodes`&& results.results.map(event=>(            
            <Link className={styles.link} key={event.id}  href={{pathname:`/episodes/${event.id}`,query:{page:query.page,name:query.name}}}> 
                <Card  item={event}/>           
            </Link>))}   
        </div>        
      <LoadMore setPage={setPage}/> 
    </>
  );
};
export default Pages;

  
  