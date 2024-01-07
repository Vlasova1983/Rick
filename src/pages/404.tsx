import { NextPage} from "next";
import Image from 'next/image';
import Head from "next/head";
import Layout from "@/components/layout/layout";


const NotFound:NextPage=()=>{
    return (
        <Layout>
            <Head>
                <title>NotFound</title>
            </Head>
            <h1>404 PAGE NOT FOUND</h1>
            <Image                
                src="./logo.svg"
                alt="PAGE NOT FOUND.ERROR 404"           
                width={723}
                height={212}
                priority               
            />   
        </Layout>       
    );
};

export default NotFound;