import { NextPage,GetServerSideProps } from 'next';
import {  IHeroData } from '@/interfaces/hero.interface';
import { HeroService } from '@/services/characters.service';
import Location from '@/components/screens/locations/Locations';
import Head from "next/head";


const LocationsPage:NextPage<{ results:IHeroData }>=({results})=>{    
  return (
    <>
      <Head>
        <title>Locations</title>
      </Head>
      <Location results={results}/>
    </>  
  )
}


export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }>= async()=>{
  const results = await HeroService.getLocation()
  
    return {
      props:{results}
    }
  }
export default LocationsPage