import {  useEffect,useState } from 'react';
import { NextPage,GetServerSideProps,GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from "querystring";
import {  IHeroData } from '@/interfaces/hero.interface';
import { HeroService } from '@/services/characters.service';
import Loader from '@/components/loader/loader';
import Head from "next/head";
import Locations from '@/components/screens/locations/Locations';
import Layout from '@/components/layout/layout';


const LocationsPage:NextPage<{ results:IHeroData }>=({results})=>{ 
  const[pageLocation,setPageLocation]=useState<number>(1);
  const router=useRouter(); 
  const setPage=()=>{
    pageLocation<results.info.pages?setPageLocation(pageLocation+1):setPageLocation(1);
  };
  useEffect(()=>{
    router.push({
      pathname:'/locations',
      query:{
        page:pageLocation
      }
    });
  },[pageLocation]) ;
  
  return (
    <Layout>
      <Head>
        <title>Locations</title>
      </Head>
      <Locations results={results} setPage={setPage}/>
      {!results && <Loader />} 
    </Layout>  
  );
};


export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }> =async (context:GetServerSidePropsContext<ParsedUrlQuery>)=> {
  const { query } = context;
  const results = await HeroService.getLocation(query.page);   
  return {
    props:{results}
  };
};
export default LocationsPage;

