import Layout from "@/components/layout/layout";
import Head from "next/head";
import { NextPage,GetServerSideProps,GetServerSidePropsContext} from "next";
import { IHero,IHeroData} from '@/interfaces/interface';
import { HeroService } from '@/services/characters.service';
import { useRouter } from "next/router";
import CardLocation from "@/components/cardLocation/cardLocation";
import { ParsedUrlQuery } from "querystring";
import styles from "./locations.module.css";


const LocationsPage:NextPage<{ results:IHero }>=({results})=>{
    const { replace } = useRouter();
    const {query}=useRouter();       
    return(
        <>
            <Head>
                <title>Locations</title>
            </Head>            
            <Layout>
                <div className={styles.conteiner} >
                    <button  className={styles.back} onClick={()=>replace({pathname:`/locations`,query:{page:query.page,name:query.name}})}>GO BACK</button>                   
                </div>              
                <CardLocation results={results.residents}/>                 
            </Layout>
        </>
    );    
};

export const getServerSideProps:GetServerSideProps<{ results: string | IHeroData }>= async(context:GetServerSidePropsContext<ParsedUrlQuery>)=>{
    const { query } = context;    
    const results = await HeroService.getByIdLocations(query.id);
    return {
        props:{results}
    };
}; 
 


export default LocationsPage;