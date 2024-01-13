import {IHeroData } from "@/services/interfaces/interface";
import { query } from "../type/type";
import axios from "axios";

const API_URL=process.env.NEXT_PUBLIC_DOMAIN;
axios.defaults.baseURL = API_URL;

export const HeroService = {
  async getAll(page:query,name:query,gender:query,status:query,species:query){       
    try {           
      const {data}= await axios.get<IHeroData>(`/character/?page=${page}&name=${name}&gender=${gender}&status=${status}&species=${species}`);
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
  async getLocation(page:query,name:query,type:query,dimension:query){
    try {           
        const {data}= await axios.get<IHeroData>(`/location/?page=${page}&name=${name}&type=${type}&dimension=${dimension}`);                
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