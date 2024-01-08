import { NextPage} from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const  HomePage:NextPage=() =>{  
  const router=useRouter(); 
  useEffect(()=>{
    router.push({
      pathname:'/characters',
      query:{
        page:1,
        name:'rick'
      }
    });
  },[]); 
  return (<></>);
};
export default HomePage;
