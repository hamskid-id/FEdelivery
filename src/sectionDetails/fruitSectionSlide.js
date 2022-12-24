import React from "react";
import Slider from "react-slick";
import { useDispatch,useSelector} from "react-redux";
import { cartActions } from "./store/cartslice";

export const FruitSection =()=> {

  const { fruititems}= useSelector((state)=>state.product)
  const dispatch = useDispatch();
   const addToCart=(e)=>{
       const items = fruititems.find((item)=> e._id === item._id)
        dispatch(cartActions.addToCart({
            _id:items._id,
            name:items.name,
            calories:items.calories,
            price:items.price,
            img:items.img,
            itemAmount:items.itemAmount,
        }))   
        dispatch(cartActions.updateSubTotal())
    }
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      }
      return (
      <div className=" pt-5  pb-5 fruit-px-5">
        <h2 className='fw-bold mb-5 fr-header '> Our Fresh & Healthy Fruits</h2>
        <Slider {...settings}>
          {
            fruititems.map((fruit,index)=>{
                const {name,price,img,calories,_id}= fruit;
                return(
                    <div key={index}>
                        <div className="m-2 d-flex flex-column align-items-center shadow  ">
                            <div className="d-flex flex-row align-items-center w-75">
                                <div>
                                    <img className="fruite-w" src={img} alt="object not found"/>
                                </div>
                                <div>
                                    <button className="btn btn-sm redButton text-white rounded-circle" onClick={()=>addToCart({_id})}> +</button>
                                </div>
                            </div>
                            
                            <p className="fw-bold">{name}</p>
                            <p className="fw-bold">{calories} Calories</p>
                            <p className="fw-bold">$ {price}</p>
                        </div>
                    </div>
                )
            })
          }
        </Slider>
      </div>
    );
  }
