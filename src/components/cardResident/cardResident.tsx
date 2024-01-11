import { useEffect, useState } from "react";
import { NextPage } from 'next';
import { useRouter } from "next/router";
import Image from "next/image";
import { IHero, IHeroData} from "@/services/interfaces/interface";
import styles from "./cardResident.module.css";


const CardResident:NextPage<{ residents:string[] ,results:IHero}>=({residents,results})=>{
  const[result,setResult]=useState<IHero[]>([]);
  const { pathname } = useRouter();  
  const cardsHtml:number[]=[];

  for(let i=0;i<residents.length;i+=1){  
    fetch(`${residents[i]}`) 
      .then((response)=> {return response.json();})
      .then((data:IHero)=>cardsHtml.push(data.id));}

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${cardsHtml}`) 
    .then((response)=> {return response.json();})
    .then((data:IHeroData)=>setResult(data.results));
  },[]);

  return (
    <>
      <h1 className={styles.h1}>{results.name}</h1>
      {pathname===`/locations/[id]`&& 
        <div className={styles.conteinertext}>
          <div ><p>Type</p><p className={styles.text}>{results.type}</p></div>
          <div><p>Dimension</p><p className={styles.text}>{results.dimension}</p></div>
        </div>
      }      
      {pathname===`/locations/[id]`&&      
      <h2 className={styles.h2}>Residents</h2>
      }
      {pathname===`/episodes/[id]`&& 
        <div className={styles.conteinertext}>
          <div ><p>Episode</p><p className={styles.content}>{results.episode}</p></div>
          <div><p>Date</p><p className={styles.content}>{results.air_date}</p></div>
        </div>
      }    
      {pathname===`/episodes/[id]`&& 
      <h2 className={styles.h2}>Cast</h2>
      }      
      <div className={styles.wrapper}>
        {result.length!==0 && result.map(item=>          
        < div key={item.id} className={styles.card}>
          <Image
              className={styles.images}     
              src={item.image}
              alt={item.name}          
              width={312}
              height={232}  
              priority         
          />
          <div className={styles.text}>
            <h3>{item.name}</h3>
            <p>{item.species}</p>
          </div>      
        </div >)}     
      </div> 
    </>  
  ) ;   
};  

export default CardResident;




