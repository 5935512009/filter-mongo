import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Filter from './components/filter/Filter';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/filter' element={<Filter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
