import { FC, useState} from "react";
import styles from "./selectElement.module.css";


const Select:FC<{array:string[],name:string}>=({array,name})=>{ 
  const [value, setValue] = useState(name); 
  // console.log(value);
  return (    
    <select 
      value={value} onChange={(e) =>setValue(e.target.value)} 
      className={styles.select} 
      name={name}
    >
      {array.map((i=><option key={i} value={i}>{i}</option>))}        
    </select>    
  );
};  
  
export default Select;

 
           