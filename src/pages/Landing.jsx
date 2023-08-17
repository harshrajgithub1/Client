// import styled from 'styled-components';
// import Wrapper from '../assets/wrappers/LandingPage';
// import main from '../assets/images/main.svg';
// import logo from '../assets/images/logo.svg';



// const Landing = () => {
//   return (
//    <Wrapper>
//        <nav>
//          <img src={logo} alt='jobify' className='logo'/>
//        </nav>
//        <div className='container page'>
//          <div className='info'>
//           <h1> job <span> tracking</span>app</h1>
//           <p>Harsh Raj</p>
//           <link to='/register' className='btn register-link'>Register</link>
//           <link to='/login' className='btn'>Login / Demo User</link>
//           </div>
//           <img src={main} alt='job hunt' className='img main-img'/>
//           </div>
//   </Wrapper>
//   );
// };

// export default Landing;







import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import  {Link}  from 'react-router-dom';



const Landing = () => {

  return (
    <Wrapper>
    <nav>
       <Logo/>
    {/* <img src="../src/assets/images/Jobify.jpeg" alt='avt'/> */}
    </nav>
     
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <div>
          <button type="button" class="btn btn-success">Register</button> 
            
          <button type="button" class="btn btn-success">Login / Demo User</button>
          </div>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
