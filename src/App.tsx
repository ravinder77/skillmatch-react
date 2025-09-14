import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
function App() {


  return (
     <Router>
         <Routes >
             <Route path = '/' element = {<Home />} />
             <Route path = '/login' element={<Login/>}/>
             <Route path = '/signup' element={<Signup/>}/>
         </Routes>
     </Router>
  )
}

export default App
