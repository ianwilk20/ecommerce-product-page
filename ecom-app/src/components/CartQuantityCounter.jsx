import { useState } from 'react'
import PropTypes from 'prop-types'

const CartQuantityCounter = ({ addToCart }) => {
    const [itemCount, setItemCount] = useState(0)

    const increment = () => {
        setItemCount(itemCount + 1)
    }

    const decrement = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1)
        }
    }

    const onAddToCart = () => {
        addToCart(itemCount)
        setItemCount(0)
    }

    return (
        <div className="flex flex-col gap-4 md:flex-row md:gap-4">
            <div className="flex justify-between items-center px-4 rounded-md bg-gray-100 h-12 md:h-full md:grow-[1]">
                <button
                    className="bg-transparent p-2 fill-orange-500 hover:fill-orange-300"
                    onClick={decrement}
                >
                    <svg
                        width="12"
                        height="4"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-inherit"
                    >
                        <title>Decrement icon</title>
                        <defs>
                            <path
                                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                                id="a"
                            />
                        </defs>
                        <use
                            fillRule="nonzero"
                            xlinkHref="#a"
                            className="fill-inherit"
                        />
                    </svg>
                </button>
                <span className="text-black font-bold w-4">{itemCount}</span>
                <button
                    className="bg-transparent p-2 fill-orange-500 hover:fill-orange-300"
                    onClick={increment}
                >
                    <svg
                        width="12"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-inherit"
                    >
                        <title>Increment icon</title>
                        <defs>
                            <path
                                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                                id="b"
                            />
                        </defs>
                        <use
                            className="fill-inherit"
                            fillRule="nonzero"
                            xlinkHref="#b"
                        />
                    </svg>
                </button>
            </div>
            <button
                // Get the onAddItem working now that we know the inc/dec happens separate to adding to cart
                onClick={onAddToCart}
                className="flex justify-center items-center gap-4 p-4 font-bold text-black w-[100%] bg-orange-500 hover:bg-orange-300 md:w-auto md:grow-[2]"
            >
                <svg
                    viewBox="0 0 22 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px]"
                    aria-label="[title]"
                >
                    <title>Shopping cart icon</title>
                    <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill="#000"
                        fillRule="nonzero"
                    />
                </svg>
                Add to cart
            </button>
        </div>
    )
}

CartQuantityCounter.propTypes = {
    addToCart: PropTypes.func.isRequired,
}

export default CartQuantityCounter
