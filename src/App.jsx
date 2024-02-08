import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Topstocks from "./components/Topstocks";
import Home from './components/Home';


export default function App() {
  return (
    <Router>
      <Navbar />
      


      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
       

      <Routes>
      <Route path="/topstocks" element={<Topstocks />} />
      </Routes>
    </Router>
  );
}
