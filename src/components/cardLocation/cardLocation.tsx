import { IHero} from "@/interfaces/hero.interface";
import { NextPage } from 'next';
import Image from "next/image";
import styles from "./cardLocation.module.css";

const CardLocation:NextPage<{ results:string[] }>=({results})=>{

  console.log(results);
  const cardsHtml:IHero[]=[];
  // for(let i=0;i<results.length;i+=1){  
  //   fetch(`${results[i]}`) 
  //     .then((response)=> {return response.json();})
  //     .then((data:IHero)=>{cardsHtml.push(data);}     
  //   );
  // }
  
  return (
    <>    
      <h2 className={styles.title}>Residents</h2>
      <div className={styles.wrapper}>
        {cardsHtml.map(item=>          
        < div className={styles.card}>
          <Image
              className={styles.images}     
              src={item.image}
              alt={item.name}          
              width={312}
              height={232}  
              priority         
          />
          <div className={styles.text}>
            <h3>{item.name}</h3>
            <p>{item.species}</p>
          </div>      
        </div >)}    
      </div> 
    </>  
  ) ;   
};  

export default CardLocation;




