import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, Badge } from '@mui/material';

export default function Header() {
  return (
    <header className='bg-slate-800 flex items-center p-3 justify-between'>
        <Link to='/home/all'>
          <IconButton>
            <img className='w-[150px] h-[55px]' src={logo} alt='Logo' />
          </IconButton>
        </Link>

        <nav className='flex items-center gap-5'>
          <Link to='/home/notifications'>
            <IconButton>
              <Badge color='primary' badgeContent={5} max={99}>
                <NotificationsIcon className='text-red-500' fontSize='large' />
              </Badge>
            </IconButton>
          </Link>

          <Link to='/home/user'>
            <IconButton>
              <img
                className='w-[55px] h-[55px] rounded-full'
                src='https://avatars.githubusercontent.com/u/79150484?v=4'
                alt=''
              />
            </IconButton>
          </Link>
        </nav>
      </header>
  )
}
