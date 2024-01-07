import {  useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage,GetServerSideProps,GetServerSidePropsContext } from 'next';
import {  IHeroData } from '@/interfaces/hero.interface';
import { HeroService } from '@/services/characters.service';
import Loader from '@/components/loader/loader';
import { ParsedUrlQuery } from "querystring";
import Head from 'next/head';
import Layout from '@/components/layout/layout';
import Episodes from '@/components/screens/episodes/Episodes';


const EpisodesPage:NextPage<{ results:IHeroData }>=({results})=>{ 
  const[pageEpisodes,setPageEpisodes]=useState<number>(1);
  const router=useRouter(); 
    const setPage=()=>{
      pageEpisodes<results.info.pages?setPageEpisodes(pageEpisodes+1):setPageEpisodes(1);
    };
  useEffect(()=>{
    router.push({
      pathname:'/episodes',
      query:{
        page:pageEpisodes
      }
    });
  },[pageEpisodes]) ;  

  return (
    <Layout>
      <Head>
        <title>Character</title>
      </Head>      
      <Episodes results={results} setPage={setPage}/>
      {!results && <Loader/>} 
    </Layout>
  );  
};
export default EpisodesPage;

export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }> =async (context:GetServerSidePropsContext<ParsedUrlQuery>)=> {
  const { query } = context;
  const results = await HeroService. getEposodes(query.page);   
  return {
    props:{results}
  };
};

 