
const MovieComponent = (props) =>{
const{Title,Year,Type,Poster}= props.movie;
return <div  class='flex-column p-[10px] w-[280px] justify-center shadow-[0_3px_10px_0_#aaa] cursor-pointer sm:w-[130px] sm:h-[200px] lg:w-[280px] lg:h-[430px]' >
   <img class='h-[362px] object-cover sm:h-[150px] lg:h-[362px]' src={Poster} alt="imag not found "/>
    <p class='text-[20px] font-[600] text-[#000000] m-[15] whitespace-nowrap  text-ellipsis overflow-hidden sm:text-[10px] lg:text-[20px]'>{Title}</p>
    <div class='flex justify-between'>
  <p class='sm:text-[8px] lg:text-[15px]'>Year : {Year}</p>
  <p class='sm:text-[8px] lg:text-[15px] '>Type : { Type}</p>
    </div>
    
    </div>
};
export default MovieComponent;