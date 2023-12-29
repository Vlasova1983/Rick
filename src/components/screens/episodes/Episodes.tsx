import { FC } from "react"
import { IHeroData } from "@/interfaces/hero.interface"
import Link from "next/link"
import Layout from "@/components/layout/layout"
import Card from "@/components/card/card"
import Image from "next/image"
import styles from "./Episodes.module.css"

const Episodes:FC<{ results:IHeroData }> =({results})=>{   
  return (
    <Layout> 
      <Image
        className={styles.images}
        src="./episodes.svg"
        alt="episodes"           
        width={220}
        height={135}
        priority
    />  

    <div className={styles.wrapper}>
        {results.results.map(event=>(
        <Link className={styles.link} key={event.id} href={`/`}> 
          <Card  item={event}/>           
        </Link>))}   
      </div>        
      
    </Layout>
  )
}
export default Episodes