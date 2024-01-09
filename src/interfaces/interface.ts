export interface IHero{    
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
    },
  location: {
    name: string,
    url: string
    },
  image: string,
  episode:string [],
  residents:string [],
  url: string,
  created: string
  air_date:string      
}


export interface IHeroData{
  info: {
    count: number,
    pages: number,
    next: number,
    prev: null
  },
  results:IHero[],   
}

export let key:number;

export type f1 = () => void;
  
export type f2 = (value:string) => void;

export type query = string | string[] | undefined;

