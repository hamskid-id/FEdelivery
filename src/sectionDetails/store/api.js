
export const url = "https://webdecommerce-api.onrender.com/api";
export const setHeaders = ()=>{
    const headers ={
        headers: {
            "x-auth-token":localStorage.getItem("token")
        }
    }
    return headers
}
