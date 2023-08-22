// import { FaTimes } from "react-icons/fa";
// import Wrapper from "../assets/wrappers/SmallSidebar";
// import { useDashboardContext} from '../pages/DashboardLayout';
// import Logo from './Logo';
// import links from "../utils/links";

// const SmallSidebar = () => {
//   const data = useDashboardContext();
  
//   return (
//      <Wrapper>
//         <div className='sidebar-container show-sidebar'>
//            <div className='content'>
//              <button type='button' className='close-btn'>
//               <FaTimes />
//              </button>
//               <header>
//                  <Logo/>
//               </header>
//                <div className='nav-links'>
//                    {links.map((link)=>{
//                      const {text,path,icon}= link
//                      return ( 
//                      <NavLink to={path} key={text} className='nav-link'>
//                       <span className='icon'>{icon}</span>
//                         {text}
//                      </NavLink>
//                     );
//                  })}
//               </div>
//           </div>
//        </div>
//      </Wrapper>
//   );
// };

// export default SmallSidebar;






import React from 'react';  // Import React
import { FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';  // Import NavLink
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from '../pages/DashboardLayout';
import Logo from './Logo';
import links from "../utils/links";
import NavLinks from './NavLinks';
//import { NavLink } from 'react-router-dom';

const SmallSidebar = () => {
    const {showSidebar,toggleSidebar} = useDashboardContext();

  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container show-sidebar':'sidebar-container'
        }
       >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
            <NavLinks/>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;

