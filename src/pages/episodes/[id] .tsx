import Layout from "@/components/layout/layout";
import Head from "next/head";
import { NextPage,GetServerSideProps,GetServerSidePropsContext} from "next";
import { IHero,IHeroData} from '@/interfaces/hero.interface';
import { HeroService } from '@/services/characters.service';
import { useRouter } from "next/router";
import CardEpisodes from "@/components/cardEpicodes/cardEpisodes";
import { ParsedUrlQuery } from "querystring";
import styles from "./episodes.module.css";


const EpisodesPage:NextPage<{ results:IHero }>=({results})=>{
    console.log(results);
    const { replace } = useRouter();        
    return(
        <>
            <Head>
                <title>Episodes</title>
            </Head>            
            <Layout>
                <div className={styles.conteiner} >
                    <button  className={styles.back} onClick={()=>replace('/episodes')}>GO BACK</button>                   
                </div>
                <CardEpisodes item={results}/>
            </Layout>
        </>
    ) ;   
};



export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }>= async(context:GetServerSidePropsContext<ParsedUrlQuery>)=>{
    const { query } = context; 
    const results = await HeroService.getByIdEpisodes(query.id);
    return {
        props:{results}
    };
};


export default EpisodesPage;