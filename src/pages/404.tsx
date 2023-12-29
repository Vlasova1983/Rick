import { NextPage} from "next";
import Image from 'next/image'
import Head from "next/head";
import Layout from "@/components/layout/layout"


const NotFound:NextPage=()=>{
    return (
        <Layout>
            <Head>
                <title>NotFound</title>
            </Head>
            <Image                
                src="./error-404.svg"
                alt="error-404"           
                width={500}
                height={500}
                priority
            />   
        </Layout>      
        
    )
}

export default NotFound