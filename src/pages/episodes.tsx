import {  useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage,GetServerSideProps,GetServerSidePropsContext } from 'next';
import {  IHeroData } from '@/interfaces/interface';
import { HeroService } from '@/services/characters.service';
import Loader from '@/components/loader/loader';
import { ParsedUrlQuery } from "querystring";
import Head from 'next/head';
import Layout from '@/components/layout/layout';
// import Episodes from '@/components/screens/episodes/Episodes';
import Pages from '@/components/screens/pages/pages';


const EpisodesPage:NextPage<{ results:IHeroData }>=({results})=>{
  const {query}=useRouter(); 
  const[pageEpisodes,setPageEpisodes]=useState<number>(Number(query.page));
  const [name,setName]=useState<string>(String(query.name)); 
  const router=useRouter(); 
  const setPage=()=>{
    pageEpisodes<results.info.pages?setPageEpisodes(pageEpisodes+1):setPageEpisodes(1);
  };

  const setValueName=(value:string)=>{
    setName(value);
    setPageEpisodes(1);
  };   

  useEffect(()=>{
    router.push({
      pathname:'/episodes',
      query:{
        page:pageEpisodes,
        name:name
      }
    });
  },[pageEpisodes,name]) ;  

  return (
    <Layout>
      <Head>
        <title>Character</title>
      </Head>      
      <Pages results={results} setPage={setPage} setValueName={setValueName}/>
      {!results && <Loader/>} 
    </Layout>
  );  
};


export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }> =async (context:GetServerSidePropsContext<ParsedUrlQuery>)=> {
  const { query } = context;
  const results = await HeroService. getEposodes(query.page,query.name);   
  return {
    props:{results}
  };
};

export default EpisodesPage; 