import React from 'react'
import { useSelector } from 'react-redux';
import { CartPage } from '../cartpage';



export const FirstSection =()=>{

    const { fisrtSectionImgitems}= useSelector((state)=>state.product)
    return( 

        <div className='container-fluid section1'>
            <div className='row  px-3 section1-div'>
                 <div className='col col-md-8 py-3 '>
                    <div>
                        <p className='bike rounded px-4 section1-py-1 fw-bold'>Bike Delivery <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bicycle" viewBox="0 0 16 16">
                            <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
                            </svg>
                        </p>
                        <div className='city display-4 fw-bold p-0'>Get the Best On time Delivery<span className='city-span p-0'> in Your City</span></div>
                        <button className="btn btn-prop rounded order-btn">Order now</button>

                    </div>
                </div>
                <div className='col col-md-4 pink-box'>
                    <div className='row move-main-box'>
                        {
                            fisrtSectionImgitems.map((item,index)=>{
                                const {name,subName ,price,img} = item;
                                return(
                                    <div className='col col-md-6 col-sm-12 img-box 'key={index} >
                                        <div className=" border rounded-box d-flex flex-column align-items-center">
                                            <div className='p-4 pb-0'>
                                                <img className=" img-h rounded mb-4" src={img} alt="object not found"/>
                                            </div>
                                            
                                            <p className='text-center '>{name}</p>
                                            <p className='text-center sub-text'>{subName}</p>
                                            <p className='text-center sub-text fw-bold mb-0'>${price}</p>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>
                   
                </div>
            </div>
            <CartPage/>
        </div> 
    )
}