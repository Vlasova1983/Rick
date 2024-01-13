import {  useEffect,useState } from 'react';
import { NextPage,GetServerSideProps,GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from "querystring";
import {  IHeroData } from '@/services/interfaces/interface';
import { HeroService } from '@/services/operations/operations.service';
import Loader from '@/components/loader/loader';
import Head from "next/head";
import Layout from '@/components/layout/layout';
import Pages from '@/components/pages/pages';

const LocationsPage:NextPage<{ results:IHeroData }>=({results})=>{
  const {query}=useRouter(); 
  const router=useRouter(); 
  const [location,setLocation]=useState<string>(String(query.location_name));
  const [locationValue,setLocationValue]=useState<string>(String(query.location_name)); 
  const [pageLocation,setPageLocation]=useState<number>(Number(query.page_location));  
  
  const setPage=()=>{
    pageLocation<results.info.pages?setPageLocation(pageLocation+1):setPageLocation(1);
  };

  const setNameLocation=(value:string)=>{
    setLocation(value);
    setPageLocation(1);
  }; 

  useEffect(()=>{
    router.push({
      pathname:'/locations',
      query:{...query,
        page_location:pageLocation,
        location_name:location 
      }
    });
  },[pageLocation,location]);
  
  return (
    <Layout>
      <Head>
        <title>Locations</title>
      </Head>
      <Pages 
        value={locationValue} 
        setValue={setLocationValue} 
        setValueName={setNameLocation} 
        results={results} 
        setPage={setPage} 
      />
      {!results && <Loader />} 
    </Layout>  
  );
};


export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }> =async (context:GetServerSidePropsContext<ParsedUrlQuery>)=> {
  const { query } = context;
  const {page_location,location_name,type,dimension}=query;
  const results = await HeroService.getLocation(page_location,location_name,type,dimension);   
  return {
    props:{results}
  };
};
export default LocationsPage;

