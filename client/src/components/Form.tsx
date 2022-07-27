import fizz from '../assets/fizz.png';

function Forms(){
    return( 
    <div>

<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <img src="/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg w-full theme.width">
    <div className="mx-auto max-w-md">
        {/* Logo here!!! */}
        <img className='md:w-1/60ch mr-[400px] w-24' id='fizzLogo' src={fizz} />



      <div className="divide-y divide-gray-300/50 ">
        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">

        <h3 className='text-4xl font-bold text-center'>Preference form</h3>
            
{/* Select programming Language  */}
          <div className="inline-block relative w-64">
          <p>Select programming Language</p>
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline ;">
                <option>Javascript</option>
                <option>Something </option>
                <option>Something</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            </div>
          </div>
{/* Coding objectives  */}
          <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        What are your coding objectives?
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Objectives"></input>
        </div>




{/* Coding objectives  */}
<div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
       How many hours would you study per week?
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Hours"></input>
        </div>



        {/* Coding objectives  */}
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Are you over 18?
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Yes or No"></input>
    </div>


       {/* Coding objectives  */}
       <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Gender
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Gender"></input>
    </div>



       {/* Coding objectives  */}
       <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
      Preferred study partner gender
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Select one"></input>
    </div>


       {/* Coding objectives  */}
       <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Location
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Country and Time Zone"></input>
    </div>

       {/* Coding objectives  */}
       <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
      What should your buddy know about you? 
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Tell us about you!"></input>
    </div>


          {/* <ul className="space-y-4">
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p className="ml-4">
                text box 1 
                <code className="text-sm font-bold text-gray-900">here</code> file
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p className="ml-4">
              text box 2
                <code className="text-sm font-bold text-gray-900">here!</code>
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p className="ml-4">Text box 3 </p>
            </li>
          </ul> */}
          <p className="text-gray-900 font-bold text-center">Thank you so much for sharig your information, it will help us to pair you with your coding buddy! 🧑‍💻</p>
        </div>
        <div className="pt-8 text-base font-semibold leading-7">
          <p className="text-gray-900">Do we want a link?</p>
          <p>
            <a href="link here lol" className="text-sky-500 hover:text-sky-600">Bc here it is! &rarr;</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
   )
}


export default Forms;