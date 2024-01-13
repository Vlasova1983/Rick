import {  useEffect,useState } from 'react';
import { NextPage,GetServerSideProps,GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import {IHeroData} from '@/services/interfaces/interface';
import { HeroService } from '@/services/operations/operations.service';
import Loader from '@/components/loader/loader';
import Layout from '@/components/layout/layout';
import Pages from '@/components/pages/pages';

const  CharacterPage:NextPage<{ results:IHeroData}>=({results}) =>{ 
  const {query}=useRouter();
  const router=useRouter();

  const [character,setCharacter]=useState<string>(String(query.character_name));
  const [characterValue,setCharacterValue]=useState<string>(String(query.character_name));
  const [pageCharecters,setPageCharecters]=useState<number>(Number(query.page_character));
 

  const setPage=()=>{
    pageCharecters<results.info.pages?setPageCharecters(pageCharecters+1):setPageCharecters(1);
  };

  const setNameCharacter=(value:string)=>{
    setCharacter(value);
    setPageCharecters(1);
  }; 

  useEffect(()=>{
    router.push({
      pathname:'/characters',
      query:{...query,
      page_character:pageCharecters,
      character_name:character    
    }});
  },[pageCharecters,character]);  
  
  return (
    <Layout>
      <Head>
        <title>Character</title>
      </Head>    
      <Pages 
        value={characterValue} 
        setValue={setCharacterValue} 
        setValueName={setNameCharacter} 
        results={results} 
        setPage={setPage} 
      />         
      {!results && <Loader/>} 
    </Layout>
  );  
};


export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }> =async (context:GetServerSidePropsContext<ParsedUrlQuery>)=> {
  const { query } = context;
  const{page_character,character_name, gender,status,species}=query;
  
  const results = await HeroService.getAll(page_character,character_name,gender,status,species);   
  return {
    props:{results}
  };
};

export default CharacterPage;