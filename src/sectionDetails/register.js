import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './store/authSlice';

export const RegisterUser =()=>{
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    console.log(auth)

   
    const [user, setUser]= useState({
        name:'',
        password:'',
        email:''
    })
  

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(registerUser(user))
        if(auth._id){
            window.location.assign("/login");
            window.location.assign("/login");
        }
        
    }
    return(
        <>
      
        <div className='loginbg'>
        
            <div className='py-5'>
            <p className='text-center fs-4 fw-bold'>Register</p>
            <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column align-items-center'>
                    <div>
                        <input className='  p-2 my-2' type='text' placeholder='name' onChange={(e)=>setUser({...user, name: e.target.value})}/>
                    </div>
                    <div>
                        <input  className=' p-2 my-2' type='email' placeholder='email' onChange={(e)=>setUser({...user, email: e.target.value})}/>

                    </div>
                    <div>
                        <input  className=' p-2 my-2' type='password' placeholder='password' onChange={(e)=>setUser({...user, password: e.target.value})}/>

                    </div>
                    <div> 
                        <button  className='btn btn-primary btn-md'>
                            {
                                auth.registerStatus === 'pending'?"submitting....":"Register"
                            }
                        </button>

                    </div>
                    <div>
                         <p className='mt-2 mb-0'>Already Register?</p><Link to='/login'>LogIn</Link>
                    </div>
                    <div >
                         {
                            auth.registerStatus === 'rejected'?<p className='fw-bold text-danger'>{auth.registerError}</p>:null
                        }
                    </div>
                   
                </div>
                
            </form>

            </div>
           

        </div>
        </>
    )
}