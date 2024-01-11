import Layout from "@/components/layout/layout";
import Head from "next/head";
import { NextPage,GetServerSideProps,GetServerSidePropsContext} from "next";
import { IHero,IHeroData} from '@/services/interfaces/interface';
import { HeroService } from '@/services/operations/operations.service';
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import CardResident from "@/components/cardResident/cardResident";
import styles from "./episodes.module.css";



const EpisodesPage:NextPage<{results:IHero}>=({results})=>{ 
    const {replace} = useRouter(); 
    const {query}=useRouter();        
    return(
        <>
            <Head>
                <title>Episodes</title>
            </Head>            
            <Layout>
                <div className={styles.conteiner} >
                    <button  className={styles.back} onClick={()=>replace({pathname:`/episodes`,query:{page:query.page,name:query.name}})}>GO BACK</button>                   
                </div>
                <CardResident residents={results.characters} results={results}/>
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