import Layout from "@/components/layout/layout";
import Head from "next/head";
import { NextPage, GetServerSideProps} from "next";
import { IHero, IHeroData } from '@/interfaces/hero.interface';
import { HeroService } from '@/services/characters.service';
import { useRouter } from "next/router";

import styles from "./locations.module.css"
import CardLocation from "@/components/cardLocation/cardLocation";

const LocationsPage:NextPage<{ results:IHero }>=({results})=>{
    const { replace } = useRouter();    
    return(
        <>
            <Head>
                <title>Locations</title>
            </Head>            
            <Layout>
                <div className={styles.conteiner} >
                    <button  className={styles.back} onClick={()=>replace('/locations')}>GO BACK</button>                   
                </div>
                <CardLocation item={results}/>
            </Layout>
        </>
    )    
}

export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }>= async(context: any)=>{
    const { query } = context;    
    const results = await HeroService.getByIdLocations(Number(query.id))
    return {
        props:{results}
    }
}


export default LocationsPage