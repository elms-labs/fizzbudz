import React from 'react';
import { useNavigate } from "react-router-dom";
import coding from '../assets/coding.svg';


const LoginPage = () => {


    return ( 
//IN login page we will have inside a Grid, the OAuth and a graph
<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white py-6 sm:py-12"> 
<div className='flex items-center justify-center md:flex-row gap-4 ml-50 mr-50'>
<div className='bg-slate-600 bg-opacity-50 rounded-lg mx-auto text-white px-10 py-16 max-w-xl grid gap-8 ml-[50px] shadow-2xl' id='gettingStartedWrapper'>
  <h3 className='text-6xl font-bold'>Let's pair you!</h3>
  <p className='text-lg'>Connect with other programmers and learn from each other to build exceptional projects together. </p>
  <div className='flex justify-start items-center flex-wrap' id='startBtnsWrapper'>
   
  </div>
</div>

</div>
</div>
    )
    
}


export default LoginPage;