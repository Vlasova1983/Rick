import { FC } from "react"
import {GetServerSideProps} from "next";
// import Image from "next/image"
import { IHero,IHeroData } from "@/interfaces/hero.interface"
import { HeroService } from '@/services/characters.service';

// import styles from "./cardLocation.module.css"



const CardLocation:FC< {item: IHero}> =({item},{results})=>{

  console.log(results)
const residentsArray:string[]=item.residents;
const array:number[]=[];
for (let i=0; i<item.residents.length;i+=1){
  array.push(Number(residentsArray[i].slice(-1)))  
}

// setInResedents(8)


  return (
    <>
           
    </>    
  )
}


export default CardLocation

export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }>= async()=>{
 
  const results = await HeroService.getByIdMany([1,2,3])
  return {
      props:{results}
  }
}