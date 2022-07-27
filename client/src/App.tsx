import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Form from './components/Form';
import MainPage from './containers/MainPage';
import MainContainer from './containers/MainContainer';
import NotificationContainer from './containers/NotificationContainer';
import UserContainer from './containers/UserContainer';
import Skills from './components/Skills';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='form' element={<Form />} />
        <Route path='skills' element={<Skills />} />
        <Route path='home' element={<MainPage />}>
          <Route index element={<MainContainer />} />
          <Route path='all' element={<MainContainer />} />
          <Route path='notifications' element={<NotificationContainer />} />
          <Route path='user' element={<UserContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
