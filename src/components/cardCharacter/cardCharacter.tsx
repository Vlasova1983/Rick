import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { IHero, IHeroData } from "@/services/interfaces/interface";
import styles from "./cardCharacter.module.css";


const CardCharacter:FC< {item: IHero}> =({item})=>{
    const {query}=useRouter();    
    const[result,setResult]=useState<IHeroData>();
    const cardsHtml:IHero[]=[];
    const url:string[]=item.location.url.split('/');

    for(let i=0;i<item.episode.length;i+=1){  
        fetch(`${item.episode[i]}`) 
        .then((response)=> {return response.json();})
        .then((data:IHero)=>cardsHtml.push(data));
    }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${cardsHtml}`) 
        .then((response)=> {return response.json();})
        .then((data:IHeroData)=>setResult(data)); 
    },[]);    
   
  return (
        <>        
            <Image
                className={styles.images}     
                src={item.image}
                alt={item.name}          
                width={150}
                height={150}  
                priority         
            />
            <h2 className={styles.name}>{item.name}</h2>
            < div className={styles.card}>        
                <div className={styles.text}>
                    <h3 className={styles.title}>Informations</h3>
                    <p className={styles.property}>Gender</p>                
                    <p className={styles.context}>{item.gender}</p>
                    <p className={styles.property}>Status</p>                
                    <p className={styles.context}>{item.status}</p>
                    <p className={styles.property}>Specie</p>                
                    <p className={styles.context}>{item.species}</p>
                    <p className={styles.property}>Origin</p>                
                    <p className={styles.context}>{item.origin.name}</p>
                    <p className={styles.property}>Type</p>                
                    <p className={styles.context}>{item.type}</p>
                    <div className={styles.wrapp}>
                        <div  className={styles.conteiner}>
                            <h4 className={styles.h4}>Location</h4>                
                            <p >{item.location.name}</p> 
                        </div>                        
                        <Link  href={{pathname:`/locations/${url[5]}`,query:{...query}}}>                           
                            <Image  
                                className={styles.link}         
                                src="/chevron_right_24px.svg"
                                alt="chevron_right"           
                                width={24}
                                height={24}
                                priority
                            />
                        </Link>                        
                    </div>                                       
                </div>
                <div className={styles.text}>
                    <h3 className={styles.title}>Episodes</h3> 
                    {result?.results.length!==0 && result?.results.slice(0, 4).map(item=>          
                    < div key={item.id} >                    
                        <div className={styles.wrapp} >
                            <div className={styles.conteiner}>
                                <h4 className={styles.h4}>{item.episode}</h4>
                                <p>{item.name}</p>
                                <p>{item.air_date}</p>                             
                            </div>                            
                            <Link  href={{pathname:`/episodes/${item.id}`,query:{...query}}}>
                                <Image 
                                    className={styles.link}          
                                    src="/chevron_right_24px.svg"
                                    alt="chevron_right"           
                                    width={24}
                                    height={24}
                                    priority
                                />
                            </Link>                           
                        </div>      
                    </div >)}                                    
                </div>          
            </div >    
        </>    
    );
};


export default CardCharacter;