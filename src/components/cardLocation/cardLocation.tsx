// import Image from "next/image"
import { IHero } from "@/interfaces/hero.interface"
import { FC } from "react";

import styles from "./cardLocation.module.css"

const CardLocation:FC< {item: IHero}>=({item})=>{  
  const residents:string[]=item.residents;
  const residentsId:number[]=[];
  for (let i=0; i<item.residents.length;i+=1){
    residentsId.push(Number(residents[i].slice(-1)))  
  } 

  
    fetch(`https://rickandmortyapi.com/api/character/${residentsId}`,) 
      .then((response)=> {return response.json()})
      .then((data:IHero[])=>
        {       
          const residentsHtml=document.getElementById('residents')  as HTMLElement;
          const cardsHtml:string[]=[];          
          data.map((item:IHero)=>{
            console.log(item)
            cardsHtml.push(
            `<div style="width:240px;  
              height: 244px;
                         
              border-radius: 4px;
              box-shadow: 0px 2px 4px 0px #00000024; 
              transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);"
              >
              <img  src=${item.image} alt="resident" loading="lazy" style="width:240px;  
              height: 168px;
              border-top-left-radius: 4px;
              border-top-right-radius: 4px;
              ">
                <div  style=" display: flex;
                flex-direction: column;    
                text-align: left;    
                padding: 12px 16px;
                ">            
                  <h3> ${item.name}</h3>
                  <p>${item.species}</p> 
                </div >              
            </div>`)});      
          residentsHtml.insertAdjacentHTML("afterbegin",cardsHtml.join(""));
        })

        console.log('render')
   
    

  return (
    <>
      <h2 className={styles.title}>Residents</h2>
      <div className={styles.wrapp} id={'residents'}></div>

    </>    
  )

  
}


export default CardLocation

