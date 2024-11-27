import React from "react"

const ProductDetails = ({brand, product_name, product_description, cost, percent_off, sale_price}) => {
    return (
        <><img /><span>{brand}</span><h2>{product_name}</h2><p>{product_description}</p><div>
            <span>{cost}</span>
            {percent_off && <span>{percent_off}</span>}
            {sale_price && <span>{sale_price}</span>}
        </div></>
    )
}

export default ProductDetails