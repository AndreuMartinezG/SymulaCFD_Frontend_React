import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


import Home from './Containers/Home/Home';

function App() {
  return (

    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>

          <Route path={'/'} element={<Home />} />
          {/* <Route path={'/profile'} element={<Profile />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/login'} element={<Login />} /> */}

        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
