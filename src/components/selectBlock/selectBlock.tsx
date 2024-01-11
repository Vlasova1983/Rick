import { FC } from "react";
import { useRouter } from 'next/router';
import { status,species,gender,type, dimension} from "@/services/constants/constants";
import Select from "../selectElement/selectElement";
import styles from "./selectBlock.module.css";


const SelectBlock:FC=()=>{
    const { pathname } = useRouter();    
    return ( 
        <>       
            {pathname==='/characters'&&        
            <div className={styles.select}>
                <Select name={species[0]} array={species}/>               
                <Select name={gender[0]} array={gender}/>                
                <Select name={status[0]} array={status}/>       
            </div>}
            {pathname==='/locations'&&        
            <div className={styles.select}>
                <Select name={type[0]} array={type}/>              
                <Select name={dimension[0]} array={dimension}/>                      
            </div>}        
        </>            
    );      
};

export default SelectBlock;

