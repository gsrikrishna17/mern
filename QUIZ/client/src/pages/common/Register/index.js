import React from 'react'
import {Form, message} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../apicalls/users';
import { HideLoading, ShowLoading } from '../../../redux/loaderSlice';
function Register() {
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const onFinish=async(values)=>{
    try {
      dispatch(ShowLoading());
      const response = await registerUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        navigate('/login');
      } else {
        message.error(response.message);
      }

    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
    };

    const validateEmail = (_, value) => {
      if (!value || value.indexOf('@') === -1 || (!value.includes('.com') && !value.includes('.in'))) {
        return Promise.reject('Please enter a valid email address.');
      }
      return Promise.resolve();
    };
  
    const validatePassword = (_, value) => {
      let missingRequirements = [];
      if (!/(?=.*[a-z])/.test(value)) {
        missingRequirements.push('a lowercase letter');
      }
      if (!/(?=.*[A-Z])/.test(value)) {
        missingRequirements.push('an uppercase letter');
      }
      if (!/(?=.*\d)/.test(value)) {
        missingRequirements.push('a digit');
      }
      if (!/(?=.*[@$!%*?&])/.test(value)) {
        missingRequirements.push('a special character');
      }
      if (value.length < 6) {
        missingRequirements.push('at least 6 characters long');
      }
  
      if (missingRequirements.length > 0) {
        return Promise.reject(`Password is missing: ${missingRequirements.join(', ')}`);
      }
      return Promise.resolve();
    };



  return (
    
    <div className='flex justify-center items-center h-screen w-screen'>
                  <div className="login image p-8">
<img src="/images/register.jpg"  alt="a girl is trying to do register" widht="400"
height="500"  />

          </div>
      <div className="card w-400 p-3 bg-white">
        <div className='flex flex-col'>
          <h1 className="text-2xl">Register <i class="ri-user-add-line"></i></h1>
          <div className='divider'></div>
          
          <Form
          layout='vertical'
          className='mt-2' onFinish={onFinish}
          >
             <Form.Item
            name='name'
            label='Name'
            >
              <input type="text" />
            </Form.Item>
            <Form.Item
            name='email'
            label='Email'
            rules={[
              { required: true, message: 'Please enter your email address.' },
              { validator: validateEmail }
            ]}
            >
              <input type="text" />
            </Form.Item>
            <Form.Item
            name='password'
            label='Password'
            rules={[
              { required: true, message: 'Please enter your password.' },
              { validator: validatePassword }
            ]}
            >
              <input type="password" />
            </Form.Item>
           <div className='flex flex-col gap-2'>
           <button type='submit' className='primary-contained-btn mt-2 w-100'>Register</button>
            <Link to='/office' className='underline'>Already a member?Login</Link>
           </div>
          </Form>
        </div>
      </div>

    </div>
  )
}

export default Register




