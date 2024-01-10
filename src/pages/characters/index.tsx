import {  useEffect,useState } from 'react';
import { NextPage,GetServerSideProps,GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import {IHeroData} from '@/interfaces/interface';
import { HeroService } from '@/services/characters.service';
import Loader from '@/components/loader/loader';
import Layout from '@/components/layout/layout';
import Pages from '@/components/pages/pages';

const  CharacterPage:NextPage<{ results:IHeroData}>=({results}) =>{ 
  const {query}=useRouter();  
  const [pageCharecters,setPageCharecters]=useState<number>(Number(query.page));
  const [name,setName]=useState<string>(String(query.name));  
  const router=useRouter(); 
  const setPage=()=>{
    pageCharecters<results.info.pages?setPageCharecters(pageCharecters+1):setPageCharecters(1);
  };

  const setValueName=(value:string)=>{
    setName(value);
    setPageCharecters(1);
  }; 

  useEffect(()=>{
    router.push({
      pathname:'/characters',
      query:{
        page:pageCharecters,
        name:name               
      }
    });
  },[pageCharecters,name]);  
  
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
  const results = await HeroService.getAll(query.page,query.name);   
  return {
    props:{results}
  };
};

export default CharacterPage;