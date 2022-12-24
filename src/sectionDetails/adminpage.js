import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from '../header';
import { productsCreate } from './store/productSlice';
export const AdminPage=()=>{

    
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [productImg, setproductImg]= useState("");
    const [name, setName]= useState("");
    const [brand, setBrand]= useState("");
    const [amount, setAmount]= useState("");
    const [price, setPrice]= useState("");
    const [calories, setCalories]= useState("");


    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(productsCreate({
            name,
            brand, 
            price, 
            amount, 
            calories,
            image:productImg
        
        }))
    }
    const handleImageUpload = (e)=>{
        const file = e.target.files[0]
        TransformFile(file)
    }

    const TransformFile = (file)=>{
       const reader = new FileReader()
       if(file){
        reader.readAsDataURL(file)
        reader.onloadend = ()=>{
            setproductImg(reader.result)
        }
       }
    }
    return(
        <>
            <Header/>
       <form className='d-flex flex-column admin-w p-3 shadow'>
            <div className='w-100'>
                <input className='w-100 py-1 mb-2' type="text" name="name" placeholder="Give me a name"  onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='w-100'>
                <select className='w-100 py-2 mb-2' name="brand" id="product" onChange={(e)=>setBrand(e.target.value)}>
                    <option value=""> Search Category</option>
                    <option value="fruit">fruit</option>
                    <option value="chicken">chicken</option>
                    <option value="drinks">drinks</option>
                    <option value="fish">fish</option>
                    <option value="icecream">icecream</option>
                </select>
            </div>
            
            <div className='w-100'>
                <input className='w-100 py-1 mb-2' name='image' type="file" accept='image/' placeholder="click here to upload" onChange={handleImageUpload}/>
            </div>
            <div className='w-100'>
                <input className='w-100 py-1 mb-2' name='amount' type="text"  placeholder="Amount of products" onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className=' py-5 px-2 mb-2 border'>
                {productImg?<img className='w-100' src={productImg}/>:<p>image preview will appear here</p>} 
            </div>
            <div className='row'>
                <div className="col-md-6 col-sm-12 r">
                    <input type="text" name="calories" placeholder="Calories" className="py-1 mb-2 w-100"  onChange={(e)=>setCalories(e.target.value)}/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <input type="number" name="price" placeholder="$Price" className="py-1 mb-2 w-100"  onChange={(e)=>setPrice(e.target.value)}/>
                </div>
            </div>
            <div className='w-100 d-flex flex-row justify-content-between'>
                <div>
                    <button className="btn btn-success btn-md ms-auto px-4" type="submit" onSubmit={handleSubmit} style={{float:"right"}}>Save</button>
                </div>
                <div>
                    <button className="btn btn-primary btn-md ms-auto px-4 " style={{float:"right"}} onClick={()=>navigate("/")}>Back To Home</button>    
                </div>
            </div>
       </form>
        </>
        
    )
}