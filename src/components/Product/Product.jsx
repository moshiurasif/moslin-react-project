import React from 'react';
import laptop from "../../assets/images/laptop3.jpg";

const Product = () => {
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={laptop} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Laptop</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={laptop} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Laptop</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={laptop} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Laptop</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </>
    );
};

export default Product;