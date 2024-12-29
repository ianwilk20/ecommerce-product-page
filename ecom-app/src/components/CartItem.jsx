import PropTypes from 'prop-types'

const CartItem = ({
    productImage,
    productImageAltText,
    productName,
    productCost,
    productQuantity,
    removeItem,
}) => {
    return (
        <li className="flex gap-4 py-2">
            <img
                src={productImage}
                alt={productImageAltText}
                className="rounded w-12 h-12"
            />
            <div className="flex gap-4 items-center md:gap-6">
                <div className="flex flex-col items-start text-gray-500">
                    <span>{productName}</span>
                    <span>
                        {`$${productCost.toFixed(2)} x ${productQuantity}`}
                        <b className="text-black pl-2">{`$${(
                            productCost * productQuantity
                        ).toFixed(2)}`}</b>
                    </span>
                </div>
                <svg
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={removeItem}
                    className="fill-gray-400 hover:fill-black"
                >
                    <defs>
                        <path
                            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                            id="a"
                        />
                    </defs>
                    <use
                        fillRule="nonzero"
                        xlinkHref="#a"
                        className="fill-inherit"
                    />
                </svg>
            </div>
        </li>
    )
}

CartItem.propTypes = {
    productImage: PropTypes.string.isRequired,
    productImageAltText: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productCost: PropTypes.number.isRequired,
    productQuantity: PropTypes.number.isRequired,
    removeItem: PropTypes.func.isRequired,
}

export default CartItem
