import React from 'react'
import { loginUser } from '../../../apicalls/users';
import {Form, message} from 'antd';
import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {HideLoading,ShowLoading} from "../../../redux/loaderSlice";
function Login() {
  const dispatch =useDispatch();
  const onFinish=async(values)=>{
    try {
      dispatch(ShowLoading());
      const response=await loginUser(values);
      dispatch(HideLoading());
      if(response.success)
      {
        message.success(response.message);
        localStorage.setItem("token",response.data);
        window.location.href = "/";

      }
      else
      {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
  

    <div className='flex justify-center items-center h-screen w-screen bg-danger ' >
              <div className="login image p-8">
<img src="/images/login.jpg"  alt="a girl is trying to do login" widht="400"
height="500"  />

          </div>
      <div className="card w-400 p-3 bg-white">
        <div className='flex flex-col'>
         <div className="flex">
         <h1 className="text-2xl">Login <i class="ri-login-circle-fill"></i></h1>
         
         </div>

          <div className='divider'></div>
  
          <Form
          layout='vertical'
          className='mt-2' onFinish={onFinish}
          >
            <Form.Item
            name='email'
            label='Email'
            >
              <input type="text" />
            </Form.Item>
            <Form.Item
            name='password'
            label='Password'
            >
              <input type="password" />
            </Form.Item>
           <div className='flex flex-col gap-2'>
           <button type='submit' className='primary-contained-btn mt-2 w-100'>Login</button>
            <Link to='/register'  className='underline'>Register</Link>
            <Link to='/login' className='underline'>Back to Home Page</Link>
           </div>
          </Form>
        </div>
      </div>

    </div>
    
  )
}

export default Login
