import {useDispatch,useSelector} from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import React from 'react'
import { LogOutUser } from './sectionDetails/store/authSlice';
import { toast } from 'react-toastify';
import { cartActions } from "./sectionDetails/store/cartslice";


export const Header =()=>{

    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart.cartContent);
    const auth = useSelector((state)=>state.auth);
    const navigate = useNavigate()
    const handleDisplaycart=()=>{
        dispatch(cartActions.displayCart())
    }
   
    return(
     <>
        <nav className="navbar navbar-expand-lg navbar-light header-z w-100">
            <div className="container-fluid">
                <div className=" header-w">
                    <img src="https://res.cloudinary.com/hamskid/image/upload/v1661264471/reactEccommerce/headerLogo_zpo9au.jpg" className="w-100"/>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-dark"></span>
                </button>
                <div className="collapse navbar-collapse hangBurger-content" id="navbarNav">
                    <ul className="navbar-nav list-w me-5">
                        <li className="nav-item mx-2">
                            <a className="nav-link active text-dark fw-bold" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark fw-bold" href="#">Menu</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark fw-bold" href="#">About Us</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark fw-bold" href="#">Service</a>
                        </li>
                        <li className="nav-item mx-2 fw-bold"onClick={handleDisplaycart} style={{position:"relative"}}>
                            <a className="nav-link text-dark fw-bold" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>  Cart
                            {cart.length>0?<h2 className='px-1 rounded-circle text-white' style={{background:"red",position:"absolute",top:"0",fontSize:"13px"}}>{cart.length}</h2>:null}
                            </a>
                        </li>
                        <li className="nav-item d-flex flex-row fw-bold acc">
                            <a className="nav-link text-dark" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg"  height="30" fill="currentColor" className="bi bi-person rounded-circle border border-dark p-1 " viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                            </a>
                            <div className="dropdown mt-2 ">
                                    <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><p className="dropdown-item fs-12" onClick={()=>navigate('/adminPage')}>+ New Item</p></li>
                                        {auth._id ?<li><a className="dropdown-item fs-12" href="#" onClick={()=>{
                                            dispatch(LogOutUser(null));
                                            toast.warning('Logged Out',{
                                            position:"bottom-left",
                                            })
                                            }
                                        }> Log Out</a></li>:<li><Link to="/login" className="dropdown-item fs-12"> Log In</Link></li>}
                                    </ul>
                                </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     </>
    )
}