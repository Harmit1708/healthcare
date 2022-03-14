import React, { useContext, useState } from "react";
import { healthCareContext } from "../App";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function Cart() {
  let context = useContext(healthCareContext);

  let [value, setValue] = useState(context.cart);
  let [anothervalue, anothersetValue] = useState([]);
  let cartPrice = 0;

  let handleRemove = (e) => {
    context.cart.splice(context.cart.indexOf(e), 1);
    context.setCartValue(context.cart.length);
  };

  let handleMinus = (e) => {
    let index = context.cart.findIndex((c) => c.name === e.name);
    let result = (value[index].q -= 1);
    if (result < 0) {
      alert("Minimum Qty Is 1");
      value[index].q = 1;
    }
    anothersetValue(result);
  };

  let handlePlus = (e) => {
    let index = context.cart.findIndex((c) => c.name === e.name);
    let result = (value[index].q += 1);
    anothersetValue(result);
  };

  return (
    <div className="container ">
      {context.cart.length > 0 ? (
        <>
          <div className="cart" style={{display: 'grid',gridTemplateColumns:"3fr 3fr 3fr",textAlign:"center"}}>
            {context.cart.map((e, i) => {
              cartPrice = cartPrice + Number(e.price * e.q);
              return (
                <div className="m-5" key={i}>
                  <img className="cart-image" src={e.image} alt={e.name} style={{height:"250px",width:"250px"}}></img>
                  <h4 className=" blockquote">{e.name}</h4>
                  <div className="m-2">&#x20b9;{e.price}</div>
                  <div>
                    <button
                      id="minus"
                      className="btn minus-btn btn-outline-secondary m-2 "
                      onClick={() => {
                        handleMinus(e);
                      }}
                    >
                      <RemoveIcon />
                    </button>
                    Qty:{e.q}
                    <button
                      className="btn plus-btn btn-outline-secondary m-2"
                      onClick={() => {
                        handlePlus(e);
                      }}
                    >
                      <AddIcon />
                    </button>
                  </div>
                  <button
                    className="btn btn-outline-danger m-3"
                    onClick={() => {
                      handleRemove(e);
                    }}
                  >
                    Remove from Cart
                  </button>
                </div>
              );
            })}
          </div>
          <div ClassName="Total-pay" style={{textAlign: 'center'}}>
              <div>Total Pay : {cartPrice}</div>
              <Link to="/">
                <button
                  className="btn btn-outline-success m-3"
                  onClick={() => {
                    context.setCart([]);
                    context.setCartValue(0);
                  }}
                >
                  Place Order
                </button>
              </Link>
            </div>
        </>
      ) : (
        <>
          <h4 className="lead text-center">Cart Is Empty!</h4>
        </>
      )}
    </div>
  );
}

export default Cart;
