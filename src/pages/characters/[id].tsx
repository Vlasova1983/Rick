import Layout from "@/components/layout/layout";
import Head from "next/head";
import { NextPage, GetServerSideProps,GetServerSidePropsContext} from "next";
import { IHero, IHeroData} from '@/interfaces/interface';
import { HeroService } from '@/services/characters.service';
import { useRouter } from "next/router";
import CardCharacter from "@/components/cardCharacter/cardCharacter";
import { ParsedUrlQuery } from "querystring";
import styles from "./character.module.css";

const CharacterPage:NextPage<{ results:IHero }>=({results})=>{
    const { replace } = useRouter(); 
    const {query}=useRouter();  
    return(
        <>
            <Head>
                <title>Character</title>
            </Head>            
            <Layout>
                <div className={styles.conteiner} >
                    <button  className={styles.back} onClick={()=>replace({pathname:`/characters`,query:{page:query.page,name:query.name}})}>GO BACK</button>                   
                </div>
                <CardCharacter item={results}/>
            </Layout>
        </>
    );    
};

export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }>= async(context:GetServerSidePropsContext<ParsedUrlQuery>)=>{
    const { query } = context;    
    const results = await HeroService.getById(query.id);
    return {
        props:{results}
    };
};

export default CharacterPage;














