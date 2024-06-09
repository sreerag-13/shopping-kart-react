import React, { useEffect, useState } from 'react'
import NavShop from './NavShop'
import axios from 'axios'

const ViewShop = () => {

    const[data,changedata]= useState({"products":[]})
    const fetchData=()=>
        {
            axios.get("https://dummyjson.com/products").then((Response)=>{
                changedata(Response.data)
            }
        ).catch().finally()
        }
useEffect(()=>{fetchData()},[])
    return (
        <div>
<NavShop/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row">

                       {

                        data.products.map(

                            (value,index)=>{

                                return   <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card">
                                    <img src={value.thumbnail} class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.id}</h5>
                                        <p class="card-text">{value.rating}</p>
                            
                                        <a href="#" class="btn btn-primary">buy now</a>
                                    </div>
                                </div>
    
    
    
                            </div>




                            }







                        )




                       }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewShop