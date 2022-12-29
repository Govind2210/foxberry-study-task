import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import DashBoard from './Components/DashBoard'
import StudyComponents from './Components/StudyComponents';
import PrivateComponent from './Components/PrivateComponent';
import NavBar from './Components/NavBar';
import {BrowserRouter  , Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route element={<PrivateComponent/>}>  
            <Route path='/dashboard' element={<DashBoard/>}/>
            <Route path='/study' element={<StudyComponents/>}/>
            <Route path='/logout' element={<h1>Logout Components</h1>}/>
          </Route>
          
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/' element={<Login/>}/>
        
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
