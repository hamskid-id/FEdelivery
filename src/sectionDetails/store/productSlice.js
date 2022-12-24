import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import {url, setHeaders} from './api';


export const drinksFetch = createAsyncThunk(
    "products/drinks",
    async()=>{
       const response = await axios.get("https://webdecommerce-api.onrender.com/drinks");
       return response?.data;
    }
)

export const fisrtSectionImgApiFetch = createAsyncThunk(
    "products/fisrtSectionImgApi",
    async()=>{
       const response = await axios.get("https://webdecommerce-api.onrender.com/fisrtSectionImgApi");
       return response?.data;
    }
)
export const fruitFetch = createAsyncThunk(
    "products/fruit",
    async()=>{
       const response = await axios.get("https://webdecommerce-api.onrender.com/fruit");
       return response?.data;
    }
)
export const chickenFetch = createAsyncThunk(
    "products/chicken",
    async()=>{
       const response = await axios.get("https://webdecommerce-api.onrender.com/chicken");
       return response?.data;
    }
)
export const fishFetch = createAsyncThunk(
    "products/fish",
    async()=>{
       const response = await axios.get("https://webdecommerce-api.onrender.com/fish");
       return response?.data;
    }
)
export const icecreamFetch = createAsyncThunk(
    "products/icecream",
    async()=>{
       const response = await axios.get("https://webdecommerce-api.onrender.com/icecream");
       return response?.data;
    }
)

export const productsCreate= createAsyncThunk(
    "products/productsCreate",
    async(values)=>{
        try{
            const response = await axios.post(
                `${url}/products`,
                 values,
                 setHeaders()
                 )
               
            return response?.data;
        }catch(error){
            console.log(error)
                toast.error("sorry coudnt create a product",{
                    position:"top-left",
                })
        }
    }
)
export const adminProductsFetch = createAsyncThunk(
    "products/adminProductsFetch",
    async(state,action)=>{
       const response = await axios.get("https://webdecommerce-api.onrender.com/api/products");
       return response?.data
    }
)


const product_Slice = createSlice({
    name:'product',
    initialState: {
        drinksitems:[],
        fisrtSectionImgitems:[],
        fruititems:[],
        chickenitems:[],
        fishitems:[],
        icecreamitems:[],
        adminItem:[],
        items:[],
        status:null,
        createStatus:null,
        fruitstatus:null,
        fisrtSectionImgstatus:null,
        chickenstatus:null,
        icecreamstatus:null,
        fishstatus:null,
        drinkstatus:null,
    },
    reducers:{
    },
    extraReducers:{
        [drinksFetch.pending]:(state,action)=>{
            state.drinkstatus = 'pending'

        },
        [drinksFetch.fulfilled]:(state,action)=>{
            state.drinksitems = action.payload 
            state.drinkstatus = 'success'

        },
        [drinksFetch.rejected]:(state,action)=>{
            state.drinkstatus = 'rejected'
  
        },

        [fisrtSectionImgApiFetch.pending]:(state,action)=>{
            state.fisrtSectionImgstatus = 'pending'

        },
        [fisrtSectionImgApiFetch.fulfilled]:(state,action)=>{
            state.fisrtSectionImgitems = action.payload
            state.fisrtSectionImgstatus = 'success'
  
        },
        [fisrtSectionImgApiFetch.rejected]:(state,action)=>{
            state.fisrtSectionImgstatus = 'rejected'
    
        },

        [fruitFetch.pending]:(state,action)=>{
    
        },
        [fruitFetch.fulfilled]:(state,action)=>{
            state.fruititems = action.payload 
            state.fruitstatus = 'success'
     
        },
        [fruitFetch.rejected]:(state,action)=>{
            state.fruitstatus = 'rejected'
       
        },

        [chickenFetch.pending]:(state,action)=>{
            state.chickenstatus = 'pending'
          
        },
        [chickenFetch.fulfilled]:(state,action)=>{
            state.chickenitems = action.payload 
            state.chickenstatus = 'success'
           
        },
        [chickenFetch.rejected]:(state,action)=>{
            state.chickenstatus = 'rejected'
            
        },

        [icecreamFetch.pending]:(state,action)=>{
            state.icecreamstatus = 'pending'
            
        },
        [icecreamFetch.fulfilled]:(state,action)=>{
            state.icecreamitems = action.payload 
            state.icecreamstatus = 'success'
           
        },
        [icecreamFetch.rejected]:(state,action)=>{
            state.icecreamstatus = 'rejected'
          
        },

        [fishFetch.pending]:(state,action)=>{
            state.icecreamstatus = 'pending'
           
        },
        [fishFetch.fulfilled]:(state,action)=>{
            state.fishitems = action.payload 
            state.fishstatus = 'success'
           
        },
        [fishFetch.rejected]:(state,action)=>{
            state.fishstatus = 'rejected'
          
        },

        [productsCreate.pending]:(state,action)=>{
            state.createStatus = 'pending'
            console.log(state.createStatus)
        },
        [productsCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload) 
            state.createStatus = 'success'
            console.log(state.createStatus)
            toast.success("product successfuly created");
        },
        [productsCreate.rejected]:(state,action)=>{
            state.createStatus = 'rejected'
            console.log(state.createStatus)
           
        },

        [adminProductsFetch.pending]:(state,action)=>{
            state.status = 'pending'
        },
        [adminProductsFetch.fulfilled]:(state,action)=>{
            state.status = 'success'
           state.adminItem = action.payload;
           console.log(state.status)
           console.log(state.adminItem)
        },
        [adminProductsFetch.rejected]:(state,action)=>{
            state.status = 'rejected'
           
        },
    }
  
})



export const productActions = product_Slice.actions;
export default product_Slice;