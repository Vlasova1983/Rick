import Layout from "@/components/layout/layout";
import Head from "next/head";
import { NextPage, GetServerSideProps} from "next";
import { IHero, IHeroData } from '@/interfaces/hero.interface';
import { HeroService } from '@/services/characters.service';
import { useRouter } from "next/router";
import CardCharacter from "@/components/cardCharacter/cardCharacter";
import styles from "./character.module.css"

const CharacterPage:NextPage<{ results:IHero }>=({results})=>{
    const { replace } = useRouter();  
    console.log(results)
    return(
        <>
            <Head>
                <title>Character</title>
            </Head>            
            <Layout>
                <div className={styles.conteiner} >
                    <button  className={styles.back} onClick={()=>replace('/')}>GO BACK</button>                   
                </div>
                <CardCharacter item={results}/>
            </Layout>
        </>
    )    
}

export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }>= async(context: any)=>{
    const { query } = context;    
    const results = await HeroService.getById(Number(query.id))
    return {
        props:{results}
    }
}


export default CharacterPage














