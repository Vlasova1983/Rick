import Character from '@/components/screens/character/Character';
import {IHeroData } from '@/interfaces/hero.interface';
import { HeroService } from '@/services/characters.service';
import { NextPage,GetServerSideProps } from 'next';
import Head from "next/head";

 const  HomePage:NextPage<{ results:IHeroData }>=({results})=> { 
  return (
    <>
      <Head>
        <title>Character</title>
      </Head>
      <Character results={results}/>
    </>
  )  
}
export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }>= async()=>{
const results = await HeroService.getAll()

  return {
    props:{results}
  }
}


export default HomePage
