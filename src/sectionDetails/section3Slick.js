import React, { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {icecream} from "./data";
import Slider from "react-slick";
import { cartActions } from "./store/cartslice";

export const SectionThreeSick =()=>{
    
    const { drinksitems,fruititems,chickenitems,fishitems,icecreamitems, adminItem,items}= useSelector((state)=>state.product);
    
    const  dispatch = useDispatch();
    const [content,setContent]= useState(icecream);
    const query = content.find((cont)=>cont)
    console.log(query.brand);
  
   
    
   
    const addToCart=(e)=>{
       const items = content.find((item)=> e._id === item._id)|| adminItem.find((item)=> e._id === item._id)
        dispatch(cartActions.addToCart({
            _id:items._id,
            name:items.name,
            calories:items.calories,
            price:items.price,
            img:items.img||items.image.url,
            itemAmount:items.itemAmount||items.amount,
        }))   
        dispatch(cartActions.updateSubTotal())
    }

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (

        <div>
            <div className='s3-fold-w m-auto pb-5'>
                <Slider {...settings}>
                    <button className='active icecream border btn text-white text-center d-flex flex-column align-items-center rounded py-4 redButton' onClick={()=>{setContent(icecreamitems)}}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"  height="25" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="fold-text">IceCream</h3>
                    </div>
                    </button>
                    <button className='border fish btn text-white text-center d-flex flex-column align-items-center rounded py-4 redButton' onClick={()=>{setContent(fishitems)}}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg"  height="25" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="fold-text">Fish</h3>
                        </div>
                    </button>
                    <button className='border drinks btn text-white text-center d-flex flex-column align-items-center rounded py-4 redButton' onClick={()=>{setContent(drinksitems)}}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg"  height="25" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="fold-text">Drinks</h3>
                        </div>
                    </button>
                    <button className='border chicken btn text-white text-center d-flex flex-column align-items-center rounded py-4 redButton' onClick={()=>{setContent(chickenitems)}}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg"  height="25" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="fold-text">Chicken</h3>
                        </div>
                    </button>
                    <button className='border fruit btn text-white text-center d-flex flex-column align-items-center rounded py-4 redButton' onClick={()=>{setContent(fruititems)}}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg"  height="25" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="fold-text">Fruits</h3>
                        </div>
                    </button>
                </Slider>
            </div>
            <div className=" justify-content-center section3-div">
                    
                    {
                        
                            adminItem.map((item,index)=>{
                                const {name,price,image,calories,_id,brand}= item;
                                if(brand === query.brand){
                                    return(
                                        <div key={index} className=" section3-div-subdiv">
                                            <div className="m-2 d-flex flex-column align-items-center shadow p-1">
                                                <div className="prod">
                                                    <div>
                                                        <img className="fruite-w" src={image.url} alt="object not found"/>
                                                    </div>
                                                    <div>
                                                        <button className="btn redButton btn-sm text-white rounded-circle ms-3 mb-2" onClick={()=>addToCart({_id})}> +</button>
                                                    </div>
                                                </div>
                                                
                                                <p className="fw-bold info">{name}</p>
                                                <p className="fw-bold info">{calories} Calories</p>
                                                <p className="fw-bold info">$ {price}</p>
                                            </div>
                                        </div>
                                    )
                                }
  
                        })
                    
                        

                    }
                    {
                        content.map((fruit,index)=>{
                            const {name,price,img,calories,_id}= fruit;
                            return(
                                <div key={index} className=" section3-div-subdiv">
                                    <div className="m-2 d-flex flex-column align-items-center p-1">
                                        <div className="prod">
                                            <div>
                                                <img className="fruite-w" src={img} alt="object not found"/>
                                            </div>
                                            <div>
                                                <button className="btn redButton btn-sm text-white rounded-circle ms-3 mb-2" onClick={()=>addToCart({_id})}> +</button>
                                            </div>
                                        </div>
                                        
                                        <p className="fw-bold info">{name}</p>
                                        <p className="fw-bold info">{calories} Calories</p>
                                        <p className="fw-bold info">$ {price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    );
}
