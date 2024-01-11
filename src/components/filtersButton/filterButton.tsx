import { FC } from "react";
import { f1 } from "@/services/type/type";
import Image from "next/image";
import styles from "./filterButton.module.css";

const FilterButton:FC<{changeIsActive:f1,isActive:boolean}>=({changeIsActive,isActive})=>{  
    return (   
        <>
        {isActive&& 
            <button className={styles.button} onClick={()=>changeIsActive()}>
                <p>APPLY</p>
            </button>}
        {!isActive&& 
            <button className={styles.button} onClick={()=>changeIsActive()}>
                <Image
                    className={styles.imglocations}
                    src="./filter_list_24px.svg"
                    alt="filter button"           
                    width={24}
                    height={24}
                    priority
                />
                <p>ADVANCED FILTERS</p>       
            </button>}  
        </>        
    );
  };
    
    
  export default FilterButton;