import React,{useState} from 'react';
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogInUser } from './store/authSlice';
export const LogInuser =()=>{

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
   


    const [user, setUser]= useState({
        password:'',
        email:''
    })
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(LogInUser(user))
        if(auth._id){
            window.location.assign("/");
            window.location.assign("/");

        }
    }
    return(
        <>
      
        <div className=' loginbg '>
        
            <div className='py-5'>
            <p className='text-center fs-4 fw-bold'>Log In</p>
            <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column align-items-center'>
                   
                    <div className='  '>
                        <input  className='  p-2 my-2' required type='email' placeholder='email' onChange={(e)=>setUser({...user, email: e.target.value})}/>

                    </div>
                    <div className=' '>
                        <input  className='  p-2 my-2' required type='password' placeholder='password' onChange={(e)=>setUser({...user, password: e.target.value})}/>

                    </div>
                    <div className=' '> 
                        <button  className='btn btn-primary btn-md '>
                            {
                                auth.LoginStatus ==='pending'?"submitting....":"Log In"
                            }
                        </button>

                    </div>
                    <div className=''>
                         <p className='mt-2 mb-0'>Not Register?</p><Link to='/register'>register</Link>
                    </div>
                    <div className='col-md-7 '>
                         {
                            auth.LoginStatus === 'rejected'?<p className='fw-bold text-danger'>{auth.LoginError}</p>:null
                        }
                    </div>
                   
                </div>
                
            </form>

            </div>
           

        </div>
        </>
    )
}