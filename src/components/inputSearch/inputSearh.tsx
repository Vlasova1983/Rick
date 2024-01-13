import { FC} from "react";
import Image from 'next/image';
import { f2 } from "@/services/type/type";
import styles from "./inputSearch.module.css";


const Input:FC<{setValueName:f2,value:string,setValue:f2}>=({setValueName,value,setValue})=>{  
  return (
    <div className={styles.wrapper}>      
      <input 
        className={styles.input}
        placeholder="Filter by name..."
        value={value}
        onChange={e=>setValue(e.target.value)}
      />
      <button 
        onClick={()=>setValueName(value)}  
        className={styles.button}>
          <Image            
            src="./leading.svg"
            alt="search button"           
            width={24}
            height={24}
            priority
          />
      </button>    
    </div>
  );
};
  
  
export default Input;