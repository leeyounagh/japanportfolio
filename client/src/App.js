
import './App.css';
import Main from './Main/Main';
import Navbar from './navbar/Navbar';
import Footer from './Footer/Footer'
import About from './About/About';
import {Routes,Route, Router, BrowserRouter} from'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import History from './History/History';
function App() {
  return (
    <div className="App">
             <Navbar></Navbar>
        <Routes>
        <Route exact path ="/" element={<LandingPage></LandingPage>}/>
        <Route exact path ="/about" element={<About></About>}/>
        <Route exact path ="/history" element={<History></History>}/>
        </Routes>
       
        <Footer></Footer>
    
        
    </div>
  );
}

export default App;
