import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function MainPage() {
  // const navigate = useNavigate();

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainPage;
