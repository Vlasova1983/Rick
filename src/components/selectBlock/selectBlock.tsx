import { FC,useState } from "react";
import { useRouter } from 'next/router';
import { species,gender,status,type, dimension} from "@/services/constants/constants";
import Select from "../selectElement/selectElement";
import styles from "./selectBlock.module.css";


const SelectBlock:FC=()=>{
    const { pathname,query } = useRouter(); 
    const [valueSpecies,setValueSpecies] =useState<string>(String(query.species)); 
    const [valueGender,setValueGender] =useState<string>(String(query.gender));
    const [valueStatus,setValueStatus] =useState<string>(String(query.status));
    const [valueType,setValueType] =useState<string>(String(query.type));
    const [valueDimension,setValueDimension] =useState<string>(String(query.dimension)); 
    return (
        <>       
            {pathname==='/characters'&&        
            <div className={styles.select}>
                <Select value={valueSpecies} setValue={setValueSpecies} name={'species'} array={species}/>               
                <Select value={valueGender} setValue={setValueGender} name={'gender'}  array={gender}/>                
                <Select value={valueStatus} setValue={setValueStatus} name={'status'} array={status}/>       
            </div>}
            {pathname==='/locations'&&        
            <div className={styles.select}>
                <Select value={valueType} setValue={setValueType} name={'type'}  array={type}/>              
                <Select value={valueDimension} setValue={setValueDimension} name={'dimension'} array={dimension}/>                      
            </div>}        
        </>            
    );      
};

export default SelectBlock;

