import {  useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage,GetServerSideProps,GetServerSidePropsContext } from 'next';
import {  IHeroData } from '@/services/interfaces/interface';
import { HeroService } from '@/services/operations/operations.service';
import Loader from '@/components/loader/loader';
import { ParsedUrlQuery } from "querystring";
import Head from 'next/head';
import Layout from '@/components/layout/layout';
import Pages from '@/components/pages/pages';


const EpisodesPage:NextPage<{ results:IHeroData }>=({results})=>{
  const {query}=useRouter(); 
  const router=useRouter(); 

  const [episodes,setEpisodes]=useState<string>(String(query.episodes_name));
  const [episodesValue,setEpisodesValue]=useState<string>(String(query.episodes_name));
  const[pageEpisodes,setPageEpisodes]=useState<number>(Number(query.page_episodes));
   
  
  const setPage=()=>{
    pageEpisodes<results.info.pages?setPageEpisodes(pageEpisodes+1):setPageEpisodes(1);
  };

  const setNameEpisodes=(value:string)=>{
    setEpisodes(value);
    setPageEpisodes(1);
  };   

  useEffect(()=>{
    router.push({
      pathname:'/episodes',
      query:{...query,
        page_episodes:pageEpisodes,
        episodes_name:episodes
      }
    });
  },[pageEpisodes,episodes]) ;  

  return (
    <Layout>
      <Head>
        <title>Character</title>
      </Head>      
      <Pages 
          value={episodesValue} 
          setValue={setEpisodesValue} 
          setValueName={setNameEpisodes} 
          results={results} 
          setPage={setPage}
      />
      {!results && <Loader/>} 
    </Layout>
  );  
};


export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }> =async (context:GetServerSidePropsContext<ParsedUrlQuery>)=> {
  const { query } = context;
  const {page_episodes,episodes_name}=query;
  const results = await HeroService. getEposodes(page_episodes,episodes_name);   
  return {
    props:{results}
  };
};

export default EpisodesPage; 