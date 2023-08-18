import {Link} from "react-router-dom";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import {FormRow, Logo} from '../components';

const Register =() =>{
  return (
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>Register</h4>
            {/* <FormRow type="text" name="firstName" defaultValue='john'/>
           <FormRow type="text" name="location" defaultValue='earth'/>
           <FormRow type="text" name='lastName' labelText='last name' defaultValue='smith'/>
           <FormRow type='email' name='email' defaultValue='john@gmail.com'/>
           <FormRow type='password' name='password' defaultValue='secret123'/> */}
         
         <FormRow type="text" name="firstName" defaultValue='john'/>
         <FormRow type="text" name="lastName" defaultValue='smith'/>
         <FormRow type="email" name='email' defaultValue='john@gmail.com'/>
         <FormRow type='password' name='password' defaultValue='secret123' />
         <FormRow type='text' name='location' defaultValue='earth'/>
         <button type="submit" className="btn btn-block">
         submit
         </button>
         <p>Already a member?
              <Link to='/login' className='member-btn'>
                Login 
              </Link>
             </p>
      </form>
    </Wrapper>
  )
};
export default Register;