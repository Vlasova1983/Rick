import { FC } from "react"
import Image from "next/image"
import { IHero } from "@/interfaces/hero.interface"
import styles from "./cardCharacter.module.css"

const CardCharacter:FC< {item: IHero}> =({item})=>{ 
console.log(item.episode)
console.log(item.location)

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
                <div className={styles.textConteiner}>
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
                    <p className={styles.property}>Location</p>                
                    <p className={styles.context}>{item.location.name}</p>            
                </div>
                <div className={styles.textConteiner}>
                    <h3 className={styles.title}>Episodes</h3>
                                
                </div>          
            </div >    
        </>    
    )
}


export default CardCharacter