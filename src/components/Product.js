import React from "react";

const Product = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-5">
          <h2>
            {props.product.name}
            <span className="fs-6 fw-normal badge bg-secondary rounded-pill p-1">
              ${props.product.price}
            </span>
          </h2>
        </div>
        <div className="col-3">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" class="btn btn-outline-dark">
              -
            </button>
            <button type="button" class="btn btn-outline-dark">
              {props.product.quantity}
            </button>
            <button type="button" class="btn btn-outline-dark">
              +
            </button>
          </div>
        </div>
        <div className="col-4">
          {props.product.quantity * props.product.price}
        </div>
      </div>
    </>
  );
};

export default Product;
