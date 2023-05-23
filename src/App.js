
import './App.css';
import { RiMovie2Fill } from 'react-icons/ri';
import { FcSearch } from 'react-icons/fc';
import MovieComponent from './MovieComponent';
import { useState } from 'react';

import axios from 'axios';
function App() {

const[search,setsearch]=useState();
//debouncing used
const[timeoutid,updatetimeoutid]=useState();
const[movielist,updatemovielist]=useState([]);

const fetchdata =async (stringsearch) =>{
 const response= await axios.get(`https://www.omdbapi.com/?s=${stringsearch}&apikey=42385853`);
 console.log(response)
 updatemovielist(response.data.Search)
};

const ontextchange=(piyu)=>{
  clearTimeout(timeoutid);
setsearch(piyu.target.value);
const timeout = setTimeout(()=>fetchdata(piyu.target.value),200);
updatetimeoutid(timeout)
};
  return (
 <div class='overflow-hidden'>
  <div class='flex bg-[#2C3333] text-[#F7F7F7] p-[10px]   pr-[10px]  text-[40px] shadow-[0_3px_6px_0_#555] justify-between align-center '>
   <p class='flex lg:text-[50px] sm:text-[20px] '><RiMovie2Fill class='mt-[8px]  bg-[#CF0A0A] rounded-full sm:mt-[5px] lg:mt-[8px]' />Movie App</p>
 <p class='flex'><FcSearch class='w-[60px] h-[60px] sm:w-[30px] sm:h-[30px] lg:w-[60px] lg:h-[60px]'/><input placeholder='Search Movie' type="text" value={search} onChange={ontextchange} class='h-[50px] mt-[5px] w-[500px] rounded-lg text-[#000000] bold text-[30px] sm:h-[20px] sm:w-[100px] sm:text-[10px] lg:w-[500px] lg:text-[30px] lg:h-[50px]'/></p> 
 
  </div>
  <div class='flex flex-row flex-wrap p-[30px] gap-[30px] xl:gap-[150px] justify-evenly  '>
 
{movielist?.length? movielist.map((movie, index)=> <MovieComponent key={index} movie={movie} />) : 
 "No Movie Found"



}
  </div>
 </div>
  );
}

export default App;
