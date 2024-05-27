import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Accessibility from './Accessibility';
import Planyourjourney from './Planyourjourney';
import Services from './Services';
import Triptracker from './Triptracker';
import Help from './Help';
import Login from './Login';
import Signup from './Signup';
import Homebanner from './Homebanner';
import Bookticket from './components/Bookticket';

import Error from './Error';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} >
          <Route path="accessibility" element={<Accessibility/>} />
          <Route path="planyourjourney" element={<Planyourjourney/>} />
          <Route path="services" element={<Services/>} />
          <Route path="triptracker" element={<Triptracker/>} />
          <Route path="help" element={<Help/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signUp" element={<Signup/>} />
          <Route Path="homebanner" element={<Homebanner/>}/>
          <Route Path="bookticket" element={<Bookticket/>}/>
      
          
          
          <Route path="*" element={<Error/>} />
      </Route>
   

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
