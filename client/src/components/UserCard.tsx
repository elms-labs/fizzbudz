export default function UserCard() {
  return (
    <div className='bg-slate-100 h-40 p-2 rounded-md shadow-md relative'>
      <img className="h-[70px] w-[70px] rounded-full" src='https://avatars.githubusercontent.com/u/96328329?v=4' alt='' />
      <h1>Username: Miranda</h1>
      <button className="absolute bottom-3 right-3 hover:bg-green-400 bg-green-500 p-3 rounded-md">Request</button>
    </div>
  );
}
