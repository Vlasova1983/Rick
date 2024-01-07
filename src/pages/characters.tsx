import {  useEffect,useState } from 'react';
import { NextPage,GetServerSideProps,GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import {IHeroData} from '@/interfaces/hero.interface';
import Character from '@/components/screens/character/Character';
import { HeroService } from '@/services/characters.service';
import Loader from '@/components/loader/loader';
import Layout from '@/components/layout/layout';


const  CharacterPage:NextPage<{ results:IHeroData}>=({results}) =>{  
  const[pageCharecters,setPageCharecters]=useState<number>(1);
  const router=useRouter(); 
  const setPage=()=>{
    pageCharecters<results.info.pages?setPageCharecters(pageCharecters+1):setPageCharecters(1);
  };
  useEffect(()=>{
    router.push({
      pathname:'/characters',
      query:{
        page:pageCharecters,        
      }
    });
  },[pageCharecters]) ;
  return (
    <Layout>
      <Head>
        <title>Character</title>
      </Head>      
      <Character results={results} setPage={setPage} />      
      {!results && <Loader/>} 
    </Layout>
  );  
};


export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }> =async (context:GetServerSidePropsContext<ParsedUrlQuery>)=> {
    const { query } = context;
    const results = await HeroService.getAll(query.page);   
    return {
      props:{results}
    };
};

export default CharacterPage;