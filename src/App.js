import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Profile from './pages/home';
import { Profile } from "./pages/profile";

import Taskmanagement from "./TaskManagement";
const App = ()=>{
    return(
        <div><Router>
        <Routes>
            <Route path = '/' element={<Taskmanagement/>}></Route>
            {/* <Route path = '/' element={Home}></Route> */}
            {/* <Route path = '/' element={<Profile />} /> */}
        </Routes>
        </Router>
        </div>
    )
}
 
export default App;