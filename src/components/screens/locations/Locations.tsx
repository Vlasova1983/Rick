import { FC } from "react"
import Image from 'next/image'
import {  IHeroData } from "@/interfaces/hero.interface"
import Layout from "@/components/layout/layout"
import Link from "next/link"
import Card from "@/components/card/card"
import styles from "./locations.module.css"

const Location:FC<{ results:IHeroData }> =({results})=>{   
  return (
    <Layout> 
      <Image
        className={styles.images}
        src="./locations.svg"
        alt="locations"           
        width={220}
        height={135}
        priority
    />  

    <div className={styles.wrapper}>
        {results.results.map(event=>(
        <Link className={styles.link} key={event.id} href={`/locations/${event.id}`}> 
          <Card  item={event}/>           
        </Link>))}   
      </div>        
      
    </Layout>
  )
}
export default Location