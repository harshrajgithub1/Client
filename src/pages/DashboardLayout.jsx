// import {Outlet} from 'react-router-dom';
// import Wrapper from '../assets/wrappers/Dashboard';
// import { BigSidebar, Navbar, SmallSidebar } from '../components';
// import {useState} from 'react';


// const Dashboard = createContext()

// const DashboardLayout = () => {

//   const user = {name: 'john'};
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const toggleDarkTheme = () => {
//     console.log('toggle dark theme');
//   };

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   const logoutUser = async () => {
//      console.log('logout user');
//   };


//   return (
//     <DashboardContext.Provider 
//     value={{
//       user,
//       showSidebar,
//       isDarkTheme,
//       toggleDarkTheme,
//       toggleSidebar,
//       logoutUser,
//     }}>
//     <Wrapper>
//       <main className='dashboard'>
//          <SmallSidebar/>
//          <BigSidebar/>
//           <div>
//             <Navbar />
//                 <div className='dashboard-page'>
//                 <Outlet/>
//               </div>
//           </div>
//       </main>
//     </Wrapper>
//     </DashboardContext.Provider>
//   );
// };
// export const useDashboardContext = () => useContext(DashboardContext);

// export default DashboardLayout;




import React, { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import { checkDefaultTheme } from '../App';


// Create the context
const DashboardContext = createContext();


const DashboardLayout = ({isDarkThemeEnabled}) => {
  const user = { name: 'john' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);
  

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);  
     document.body.classList.toggle('dark-theme',newDarkTheme);
     localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

// Create a custom hook to use the DashboardContext
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;

