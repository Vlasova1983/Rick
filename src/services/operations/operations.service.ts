import {IHeroData,query } from "@/services/interfaces/interface";
import axios from "axios";

const API_URL=process.env.NEXT_PUBLIC_DOMAIN;
axios.defaults.baseURL = API_URL;


// let data:IHeroData={
//   info: {
//     count: 32,
//     pages: 3,
//     next: 4,
//     prev: null
//   },
  
//   results:[
// {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Male",
//     origin: {
//       name: "Earth",
//       url: "https://rickandmortyapi.com/api/location/1"
//     },
//     location: {
//     name: "Earth",
//       url: "https://rickandmortyapi.com/api/location/20"
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//     episode: [
//       "https://rickandmortyapi.com/api/episode/1",
//       "https://rickandmortyapi.com/api/episode/2",
     
//     ],
//     url: "https://rickandmortyapi.com/api/character/1",
//     created: "2017-11-04T18:48:46.250Z"
//   },
//   {
//     id: 2,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Male",
//     origin: {
//       name: "Earth",
//       url: "https://rickandmortyapi.com/api/location/1"
//     },
//     location: {
//     name: "Earth",
//       url: "https://rickandmortyapi.com/api/location/20"
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//     episode: [
//       "https://rickandmortyapi.com/api/episode/1",
//       "https://rickandmortyapi.com/api/episode/2",
     
//     ],
//     url: "https://rickandmortyapi.com/api/character/1",
//     created: "2017-11-04T18:48:46.250Z"
//   },
// ] }  
    


export const HeroService = {
  async getAll(page:query,name:query){       
    try {           
      const {data}= await axios.get<IHeroData>(`/character/?page=${page}&name=${name}`);               
    return data;             
    }
    catch (error) {
      return 'error';
    } 
  } ,

  async getByIdMany(array:number[]){  
    try {           
      const {data}= await axios.get<IHeroData>(`/character/${array}`);                
    return data;           
    }
    catch (error) {
      return 'error';
    }
  } ,
    
  async getById(id:query){
    try {           
      const {data}= await axios.get<IHeroData>(`/character/${id}`);                
    return data;           
    }
    catch (error) {
      return 'error';
    } 
  } ,
  async getLocation(page:query,name:query){
    try {           
        const {data}= await axios.get<IHeroData>(`/location/?page=${page}&name=${name}`);                
    return data;           
    }
    catch (error) {
      return 'error';
    } 
  },

  async getByIdLocations(id:query){
    try {           
      const {data}= await axios.get<IHeroData>(`/location/${id}`);                
    return data;           
    }
    catch (error) {
      return 'error';
    }
  },
  
  async getEposodes(page:query,name:query){
    try {           
      const {data}= await axios.get<IHeroData>(`/episode/?page=${page}&name=${name}`);                
    return data;           
    }
    catch (error){
      return 'error';
    }
  },
  
  async getByIdEpisodes(id:query){
    try {           
      const {data}= await axios.get<IHeroData>(`/episode/${id}`);                
    return data;           
    }
    catch (error) {
      return 'error';
    } 
  },
};