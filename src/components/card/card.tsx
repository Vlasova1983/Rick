import { FC } from "react"
import { useRouter } from "next/router";
import Image from "next/image"
import { IHero } from "@/interfaces/hero.interface"
import styles from "./card.module.css"

const Card:FC< {item: IHero}> =({item})=>{
  const { pathname } = useRouter();  
  return (
    <>
    {pathname==='/'&& 
    < div className={styles.card}>
        <Image
              className={styles.images}     
              src={item.image}
              alt={item.name}          
              width={312}
              height={232}  
              priority         
          />
          <div className={styles.textConteiner}>
            <h3>{item.name}</h3>
            <p>{item.species}</p>
          </div>      
      </div >}
    {pathname==='/locations'&& 
    <div className={styles.cardLocation}>
      <h3>{item.name}</h3>
      <p>{item.type}</p>      
    </div>}
    {pathname==='/episodes'&& 
    <div className={styles.cardLocation}>
      <h3>{item.name}</h3>
      <p>{item.air_date}</p> 
      <p>{item.episode}</p>      
    </div>}
    </>
  )
}


export default Card