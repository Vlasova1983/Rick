import { useState } from "react";

export const useResedents =()=>{
    const[resedents,setInResedents]=useState();    
    return {resedents,setInResedents}
}