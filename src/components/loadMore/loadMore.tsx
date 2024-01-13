import { FC } from "react";
import { f1 } from "@/services/type/type";
import styles from "./loadMore.module.css";


const LoadMore:FC<{setPage:f1}>=({setPage})=>{  
  return (      
    <button className={styles.button} onClick={()=>setPage()}>LOAD MORE</button>   
  );
};
  
  
export default LoadMore;