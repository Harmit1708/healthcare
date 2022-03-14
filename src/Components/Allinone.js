import React, { useEffect, useContext, useState } from "react";
import { healthCareContext } from "../App";
import { useNavigate } from "react-router-dom";

function Allinone() {
  let context = useContext(healthCareContext);
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  let getData = () => {
    if (context.data.length > 0) {
      setProducts(context.data[context.dataprint].subItems);
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    getData();
  });

  return (
    <div className="container product" style={{display: 'grid',gridTemplateColumns:"3fr 3fr 3fr",textAlign: 'center'}}>
      {products.map((e, i) => {
        return (
          <div className="product-wrapper" key={i} style={{marginTop:"20px",margin:"20px"}}>
            <img className="product-image" src={e.image} alt={e.name} style={{borderRadius:"10px",marginTop:"20px",height:"250px",width:"250px"}}></img>
            <h4 className="product-title d-flex justify-content-center w-100 blockquote text-wrap m-3">
              {e.name}
            </h4>
            <div className="display-8">&#x20b9;{e.price}</div><br></br>
            <button
              className="product-button btn btn-primary m-1 mb-5"
              onClick={() => {
                let print = context.cart.findIndex((c) => c.name === e.name);
                console.log(print);
                if (print === -1) {
                  e["q"] = 1;
                  context.cart.push(e);
                  context.setCartValue(context.cart.length);
                } else {
                  context.cart[print]["q"] += 1;
                }
                console.log(context.cart);
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Allinone;
