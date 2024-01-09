import { FC} from "react";
import { useState } from 'react';
import { f2 } from "@/interfaces/interface";
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from "./inputSearch.module.css";


const Input:FC<{setValueName:f2}>=({setValueName})=>{
  const {query}=useRouter();
  const [value,setValue]=useState<string>(String(query.name));
  
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