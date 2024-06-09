import React, { useState } from 'react'
import NavShop from './NavShop'

const SearchShop = () => {
  const[search,changedata]=useState(
    {
    "product":""
    }
    
  )
  const inputhandeler=(event)=>
    {
      changedata({...search,[event.target.name]:event.target.value})
    }
    const readvalues=()=>
      {
        console.log(search)
      }
  return (
    <div>
        <NavShop/>
<div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">product</label>
                    <input type="text" className="form-control" name='product' value={search.product} onChange={inputhandeler}/>
                    <button className="btn btn-success" onClick={readvalues}>search</button>
                </div>
            </div>
        </div>



    </div>
  )
}

export default SearchShop