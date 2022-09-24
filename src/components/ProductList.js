import React from 'react'
import Product from './Product'

const ProductList = (props) => {
    console.log(props)
  return (
    <div>
        {
            props.productList.map((product, i)=>{
                return <Product key={i} product={product} />
            })
        }
    </div>
  )
}

export default ProductList