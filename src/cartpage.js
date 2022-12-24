
import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "./sectionDetails/store/cartslice";
export const CartPage =()=>{

    const cartContent = useSelector((state)=>state.cart.cartContent);
    const showCart = useSelector((state)=>state.cart.showCart);
    const cartSubTotal = useSelector((state)=>state.cart.Subtotal);
    const cartTotal = useSelector((state)=>state.cart.totalPrice);
    const delivery = useSelector((state)=>state.cart.deliveryCost);

    const dispatch = useDispatch();
    const increaseAmount=(e)=>{
        const items = cartContent.find((item)=> e._id === item._id)
        dispatch(cartActions.handleIncrease({
            _id:items._id,
            itemAmount:items.itemAmount,
        }))
        dispatch(cartActions.updateSubTotal())
    }
    const removeFromCart=(e)=>{
        const items = cartContent.find((item)=> e._id === item._id)
        dispatch(cartActions.removeFromCart({
            _id:items._id,
            itemAmount:items.itemAmount,
        }))  
        dispatch(cartActions.updateSubTotal())
    }
    const hideCart=()=>{
        dispatch(cartActions.displayCart());
    }
    return(
        
        showCart?
            (cartContent.length >0?<div className=" cart rounded">
                <div className="d-flex flex-column">
                    {
                        cartContent.map((content,index)=>{
                            const {name,price,img,_id,itemAmount} = content;
                            return(
                                <div key={index} className="d-flex flex-row align-items-center rounded bg bg-white mb-2">
                                    <div className="w-60 d-flex flex-row align-items-center py-2">
                                        <div className="cart-img">
                                            <img className="rounded-circle cart-image" src={img} alt="object not found"/>
                                        </div>
                                        <div className=" d-flex flex-column justify-content-center px-3 text-dark">
                                            <h6 className="fw-bold">{name}</h6>
                                            <h6 className="price">$ {price}</h6>
                                        </div>
                                    </div>
                                    <div className="w-40 d-flex flex-row align-items-center text-dark">
                                        <button className="btn " onClick={()=>removeFromCart({_id})}>-</button>
                                        <span>{itemAmount}</span>
                                        <button className="btn " onClick={()=>increaseAmount({_id})}>+</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                
                </div>
                <div className="d-flex flex-column bg bg-white text-dark rounded py-3">
                    <div className="d-flex flex-row justify-content-between p-2 fw-bold">
                        <p>SubTotal</p>
                        <p>${cartSubTotal}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2 fw-bold">
                        <p>Delivery</p>
                        <p>${delivery}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2 fw-bold">
                        <p>Total</p>
                        <p>${cartTotal}</p>
                    </div>
                    <div className="m-auto check-box">
                        <button className="btn fw-bold check">Check Out</button>
                    </div>
                </div>
                <div>
                    <button className="btn btn-md btn-success  mt-4" onClick={hideCart}>Back to shop</button>
                </div>
            
            </div>:(
                    <div className=" cart rounded bg bg-white text-dark">
                        <div>
                            <img  src="https://jersix.com/wp-content/uploads/2020/10/Empty-pana-uai-516x387.png" className="w-100" alt="object not found" />
                        </div>
                        <div>
                            <p className="text-center fw-bold mt-4">Add some items to your cart</p>
                        </div>
                        <div>
                            <button className="btn btn-md btn-success  mt-4" onClick={hideCart}>Back to shop</button>
                        </div>
                    </div>
                )
            )
            :null
    )
}