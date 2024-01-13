import { NextPage} from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const  HomePage:NextPage=() =>{  
  const router=useRouter(); 
  useEffect(()=>{
    router.push({
      pathname:'/characters',
      query:{        
        character_name:'',
        page_character:'',
        location_name:'',
        page_location:'',
        episodes_name:'',
        page_episodes:'',
        species:'',
        gender:'',
        status:'',
        type:'',
        dimension:''
      }
    });
  },[]); 
  return (<></>);
};
export default HomePage;
