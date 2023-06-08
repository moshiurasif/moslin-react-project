import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    return (
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
           <Product/>
        </div>
    );
};

export default Shop;