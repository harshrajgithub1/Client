import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';



const Landing = () => {
  return (
   <Wrapper>
       <nav>
         <img src={logo} alt='jobify' className='logo'/>
       </nav>
       <div className='container page'>
         <div className='info'>
          <h1> job <span> tracking</span>app</h1>
          <p>Harsh Raj</p>
          <link to='/register' className='btn register-link'>Register</link>
          <link to='/login' className='btn'>Login / Demo User</link>

          </div>
          <img src={main} alt='job hunt' className='img main-img'/>
          </div>
  </Wrapper>
  );
};

export default Landing;
