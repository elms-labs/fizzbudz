import React from 'react';
import { useNavigate } from 'react-router-dom';
import coding from '../assets/coding.svg';

const LoginPage = () => {
  return (
    //IN login page we will have inside a Grid, the OAuth and a graph
    <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-white py-6 sm:py-12'>
      <div className='flex items-center justify-center md:flex-row gap-4 ml-50 mr-50'>
        <div
          className='bg-slate-600 bg-opacity-50 rounded-lg mx-auto text-white px-10 py-16 max-w-xl grid gap-8 ml-[50px] shadow-2xl'
          id='gettingStartedWrapper'
        >
          <h3 className='text-6xl font-bold'>Let's pair you!</h3>
          <p className='text-lg'>
            Connect with other programmers and learn from each other to build
            exceptional projects together.{' '}
          </p>
          <div
            className='flex justify-start items-center flex-wrap'
            id='startBtnsWrapper'
          >
            <button className=' justify-items-center bg-black py-3 px-6 text-lg rounded-md w-48 flex items-center justify-center gap-2 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
                />
              </svg>
              <span>Login with GitHub</span>
            </button>
          </div>
        </div>
        <img className='md:w-2/4 mr-[50px]' id='codingImg' src={coding} />
      </div>
    </div>
  );
};

export default LoginPage;
