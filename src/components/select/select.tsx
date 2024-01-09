import { FC} from "react";
import styles from "./select.module.css";


const Select:FC<{array:string[],name:string}>=({array,name})=>{  
  return (    
    <select className={styles.select} name={name}>
        {array.map((i=><option key={i} value={i}>{i}</option>))}        
    </select>    
  );
};
  
  
export default Select;