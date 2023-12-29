import { FC } from "react"
import Image from 'next/image'
import { IHeroData } from "@/interfaces/hero.interface"
import Layout from "@/components/layout/layout"
import Card from "@/components/card/card"
import Link from "next/link"
import styles from "./Character.module.css"

const Character:FC<{ results:IHeroData }> =({results})=>{ 
  return (
    <Layout> 
      <Image            
        src="./characters.svg"
        alt="characters"           
        width={312}
        height={104}
        priority
      />
      <div className={styles.wrapper}>
        {results.results.map(event=>(
        <Link className={styles.link} key={event.id} href={`/characters/${event.id}`}>        
          <Card item={event} />
        </Link>))}   
      </div>          
    </Layout>
  )
}
export default Character