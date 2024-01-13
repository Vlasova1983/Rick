
import { FC } from "react";
import { useRouter } from 'next/router';
import styles from "./selectElement.module.css";
import { f2 } from "@/services/type/type";


const Select:FC<{array:string[],name:string,value:string,setValue:f2}>=({array,name,value,setValue})=>{
  const { query,pathname } = useRouter(); 
  const router=useRouter(); 
 
  return (    
    <select 
      className={styles.select} 
      value={value}        
      onChange={(e)=>{ 
        setValue(e.target.value);          
          router.push({pathname:pathname,query:
          {...query,            
            [name]:e.target.value
          }});
        }       
      }     
    >
      {array.map((i=><option key={i}  value={i}>{i}</option>))}        
    </select>    
  );
};  
  
export default Select;

 
           