import { createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const cart_Slice = createSlice({
    name:'cart',
    initialState: {
        cartContent:localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[],
        totalPrice:0,
        Subtotal:0,
        deliveryCost:2.5,
       showCart:false
    },
    reducers:{
        addToCart(state,action){
            const newitem = action.payload;
            const existingItem = state.cartContent.find((item) => item._id === newitem._id)
            if(existingItem){
                toast.success('Item Present in the cart',{
                    position:"bottom-left",
                 })
            }else{
                state.cartContent.push({
                    _id:newitem._id,
                    name:newitem.name,
                    subName:newitem.subName,
                    price:newitem.price,
                    img:newitem.img,
                    itemAmount:newitem.itemAmount,
                });
               toast.success('Item Succesfully Added',{
                    position:"bottom-left",
                 })
            }localStorage.setItem('cartItems',JSON.stringify(state.cartContent));
        },
        handleIncrease(state,action){
            const itemToIncreaseProp = action.payload;
            const itemTonicrease = state.cartContent.find((item)=>item._id === itemToIncreaseProp._id)
            itemTonicrease.itemAmount++;
            toast.success('Item succesfully increased',{
                position:"bottom-left",
             })
             localStorage.setItem('cartItems',JSON.stringify(state.cartContent));
             
        },
         removeFromCart(state,action){
            const itemToRemoveProp = action.payload;
            const itemToRemove = state.cartContent.find((item)=>item._id === itemToRemoveProp._id)
          
            if(itemToRemove.itemAmount > 1){
                itemToRemove.itemAmount--;
               toast.success('cart Item succesffuly decreased',{
                position:"bottom-left",
               })
            }else{
                state.cartContent = state.cartContent.filter((item)=>item._id !== itemToRemove._id)
                toast.success('cart Item succesffuly Removed',{
                    position:"bottom-left",
                }) 
            }localStorage.setItem('cartItems',JSON.stringify(state.cartContent));
            },
            updateSubTotal(state,action){
                var newSubTotal=0;
                state.cartContent.forEach(cart=>{
                    newSubTotal += cart.price*cart.itemAmount;
                })
                state.Subtotal = newSubTotal;
                state.totalPrice = state.Subtotal+state.deliveryCost;
            },
            displayCart(state,action){
                state.showCart = !state.showCart;
            }
    },
  
})
export const cartActions = cart_Slice.actions;
export default cart_Slice;