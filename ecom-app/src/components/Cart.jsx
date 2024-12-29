import PropTypes from 'prop-types'
import CartItem from './CartItem'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const Cart = ({ visible }) => {
    const [cartContents, , removeLastItemFromCart] = useContext(CartContext)

    if (visible) {
        return (
            <div className="md:relative flex justify-center">
                <div className="absolute m-auto top-[5.5rem] flex flex-col items-start bg-white rounded-xl min-w-[20rem] max-w-[25rem] md:min-w-[23rem] right-0 left-0 z-10 shadow-lg md:-translate-x-3/4 md:top-4">
                    <span className="font-bold p-5">Cart</span>
                    <hr className="w-full" />
                    {cartContents.length > 0 ? (
                        <div className="w-full p-5">
                            <CartItem
                                productName={cartContents[0].name}
                                productImage={cartContents[0].thumbnail}
                                productImageAltText={
                                    cartContents[0].description
                                }
                                productCost={cartContents[0].cost}
                                productQuantity={cartContents[0].quantity}
                                removeItem={removeLastItemFromCart}
                            />
                            <button className="mt-4 p-4 font-bold text-black w-[100%] bg-orange-500 hover:bg-orange-300">
                                Checkout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-full p-5 h-40">
                            <span className="font-bold text-gray-500">
                                Your cart is empty.
                            </span>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

Cart.propTypes = {
    visible: PropTypes.bool.isRequired,
}

export default Cart
