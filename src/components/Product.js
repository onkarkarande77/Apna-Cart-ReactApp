import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3 align-items-center">

      <div className="col-2">
        <img
          src={props.product.image}
          alt={props.product.name}
          width="100"
          height="100"
        />
      </div>
                  
      <div className="col-3">
        <h2>
          {props.product.name}
          <span className="badge text-bg-secondary ms-3">
            ₹{props.product.price}
          </span>
        </h2>
      </div>

      <div className="col-3">
        <div className="btn-group">
          <button
            className="btn btn-danger"
            onClick={() => props.decrementQuantity(props.index)}
          >
            -
          </button>

          <button className="btn btn-warning">
            {props.product.quantity}
          </button>

          <button
            className="btn btn-success"
            onClick={() => props.incrementQuantity(props.index)}
          >
            +
          </button>
        </div>
      </div>

      <div className="col-2">
        ₹{props.product.price * props.product.quantity}
      </div>

      <div
        className="col-2 btn btn-danger"
        onClick={() => props.removeItem(props.index)}
      >
        Remove
      </div>
    </div>
  );
}
