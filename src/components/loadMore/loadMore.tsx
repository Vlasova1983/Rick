import { FC } from "react";
import styles from "./loadMore.module.css";
import { f1 } from "@/interfaces/interface";

const LoadMore:FC<{setPage:f1}>=({setPage})=>{  
  return (
    <>      
      <button className={styles.button} onClick={()=>setPage()}>LOAD MORE</button>      
    </>
  );
};
  
  
export default LoadMore;