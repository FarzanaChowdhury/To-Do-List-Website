import {Link, Route, Router} from "react-router-dom";
import '../Task.css';
import { Avatar, Drawer, List, ListItemButton, ListItemIcon, Stack, Toolbar } from "@mui/material";
import appRoutes from '../routes/appRoutes'
// function SideBar(){
//    return ( <div className='sidebar'>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li>
//           <Link to="/">To-Do List</Link>
//         </li>
//         <li className="dropdown">
//           <span>Dropdown 1</span>
//           <ul className="dropdown-content">
//             <li><Link to="/">Category 1</Link></li>
//             <li><Link to="/">Category 2</Link></li>
  
//           </ul>
//           </li>
//         <li>
//           <Link to="/">Grocery List</Link>
//         </li>
//         <li>
//           <Link to="/">Reading List</Link>
//         </li>
//         <li>
//           <Link to="/">Course 1</Link>
//         </li>
//         </ul>
//       </div>
// )
// }




const SideBar = () => {
  return (
    <Drawer variant='permanent'>
      <List disablePadding>
        <Toolbar>
          <Stack direction="row" justifyContent="center">
            <Avatar />
          </Stack>
        </Toolbar>
   
      
     
      </List>
    </Drawer>
  );
}

export default SideBar;