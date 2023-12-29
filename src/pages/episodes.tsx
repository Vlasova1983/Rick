import { NextPage,GetServerSideProps } from 'next';
import {  IHeroData } from '@/interfaces/hero.interface';
import { HeroService } from '@/services/characters.service';
import Episodes from '@/components/screens/episodes/Episodes';
import Head from "next/head";


const EpisodesPage:NextPage<{ results:IHeroData }>=({results})=>{    
  return (
    <>
      <Head>
        <title>Episodes</title>
      </Head>
      <Episodes results={results}/>
    </>
  )
}
export default EpisodesPage

export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }>= async()=>{
  const results = await HeroService.getEposodes()
  
    return {
      props:{results}
    }
  }
  