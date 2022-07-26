

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Form from './components/Form';
import MainPage from './components/MainPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element = {<LoginPage/>}/>
          <Route path='/form' element = {<Form/>}/>
          <Route path='/home' element = {<MainPage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;

