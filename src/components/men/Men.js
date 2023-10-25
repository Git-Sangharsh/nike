import React, { useEffect, useState } from "react";
import "./Men.css";
import api from "../api/Api";
import { Link } from "react-router-dom";
import kylin from '../assets/mbappe.mp4'
const Men = () => {

    const [mainData, setMainData] = useState([])

    useEffect(() => {
        setMainData(api)
    },[])
    // console.log(mainData)

    const passingProduct = (i) => {
      console.log(i.id)
    }

  return (
    <div className="Products">
      <div className="ad">
          <h1>Step into unreal speed with Kylin Mbappe</h1>
        <video className="video-css" muted autoPlay loop>
          <source src={kylin} type="video/mp4" />
        </video>
      </div>
      <div className="products-wrapper">
        {mainData?.map((i) => (
          <div className="main-api-div" key={i.id}>
            <Link to={`/data/${i.id}`} style={{textDecoration: "none"}}>
              <div className="card" key={i.id} onClick={ () => passingProduct(i)}>
                <img src={i.img} className="card-img" alt="" />
                <h1 className="card-headers">Available in SNKRS</h1>
                <h2 className="card-headers">{i.title}</h2>
                <h3 className="card-headers">Men's Shoes</h3>
                <h5 className="card-headers">{i.price}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Men