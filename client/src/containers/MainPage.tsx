import logo from '../assets/logo.svg';

import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, Badge } from '@mui/material';

import { Routes, Route, useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import NotificationContainer from './NotificationContainer';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div>
      <header className='bg-slate-800 flex items-center p-3 justify-between'>
        <img className='w-[150px] h-[55px]' src={logo} alt='Logo' />
        <nav className='flex items-center gap-5'>
          <IconButton onClick={() => navigate('/notifications')}>
            <Badge color='primary' badgeContent={5} max={99}>
              <NotificationsIcon className='text-red-500' fontSize='large' />
            </Badge>
          </IconButton>

          <IconButton>
            <img
              className='w-[55px] h-[55px] rounded-full'
              src='https://avatars.githubusercontent.com/u/79150484?v=4'
              alt=''
            />
          </IconButton>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/notifications' element={<NotificationContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default MainPage;
