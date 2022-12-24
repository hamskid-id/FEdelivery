import React from 'react'
export const Footer =()=>{
    return(
        <div>
            <div className="row p-4 justify-content-center" style={{background:'dimgrey'}}>
                <div className="col col-md-6 col-sm-12 text-white">
                    <div className=" display-5 mb-3 text-center fw-bold">On Time Delivery</div>
                </div>
                <div className="col col-md-6 text-white col-sm-12 ">
                    <p className="mb-3 text-center">SubScribe to our new letter</p>
                    <form className="d-flex flex-row align-items-center mb-3 w-100">
                        <input className=" rounded border border-white p-1" type="text"/>
                        <button className="btn btn-sm text-white p-2" style={{background:'darkslategrey'}}>SubScribe</button>
                    </form>
                    <p className="text-center m-auto" style={{borderBottom:"1px solid darkslategrey", width:"fitContent"}}>Socia media</p>
                    <div className="d-flex flex-column footer-link justify-content-center">
                        <a href="#" className=" footer-link text-white">
                            <p className="text-center">Instagram</p>
                        </a>
                        <a href="#" className=" footer-link text-white">
                            <p className='text-center'>Pinterest</p>
                        </a>
                        <a href="#" className=" footer-link text-white">                         
                            <p className='text-center' >facebook</p>
                        </a>
                        <a href="#" className=" footer-link text-white">                          
                            <p className="text-center">Twitter</p>
                        </a>
                        <a href="#" className=" footer-link text-white">                          
                            <p className="text-center">Youtube</p>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}