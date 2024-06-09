import React, { useState } from 'react'
import NavShop from './NavShop'

const AddShop = () => {
    const [shop,changedata]=useState(
        
        {
            "id":"",
           
            "description":"",
            "price":"",
            "title":"",
            "image":"",
            "rate":"",
            "count":""

        }
    )
    const inputhandler=(event)=>{
        changedata({...shop,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        console.log(shop)
    }
  return (
    <div>
    <NavShop/>
<div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label" >id</label>
                    <input type="text" className="form-control" name='id' value={shop.id} onChange={inputhandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label" >description </label>
                    <input type="text" className="form-control" name='description' value={shop.description} onChange={inputhandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Price </label>
                <input type="text" className="form-control"  name='price' value={shop.price} onChange={inputhandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label" >title</label>
                <input type="text" className="form-control" name='title' value={shop.title} onChange={inputhandler} />


                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label" >image</label>
                <input type="file" id="" className="form-control" name='image' value={shop.image} onChange={inputhandler} />

                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label" >rate</label>
                <input type="text" className="form-control" name='rate' value={shop.rate} onChange={inputhandler}/>


                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label" >count</label>
                <input type="text" className="form-control" name='count' value={shop.count} onChange={inputhandler} />


                </div>


                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success" onClick={readvalue}>add</button>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default AddShop