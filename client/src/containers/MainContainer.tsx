import UserCard from '../components/UserCard';

export default function MainContainer() {
  return (
    <div className='grid grid-cols-6 gap-5'>
      {[1, 2, 3, 4,5,6,7,8,8,9,9,0,1].map(() => (
        <UserCard />
      ))}
    </div>
  );
}
