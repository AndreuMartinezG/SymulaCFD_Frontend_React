import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
import Deskboard from './Containers/Deskboard/Deskboard';
import Profile from './Containers/Profile/profile';
import ProjectDetail from './Containers/ProjectDetail/ProjectDetail';
import SimulationDetail from './Containers/SimulationDetail/SimulationDetail';

function App() {
  return (

    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>

          <Route path={'/'} element={<Home />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/deskboard'} element={<Deskboard />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/projectdetail/:project_id'} element={<ProjectDetail />} />
          <Route path={'/simulationdetail/:project_id'} element={<SimulationDetail />} />


        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
