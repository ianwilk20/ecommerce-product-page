import { useState } from 'react'
import './App.css'
import ProductPurchasePage from './pages/ProductPurchasePage'
import SneakersHeader from './components/SneakersHeader'
import jimmy_profile_picture from './assets/images/image-avatar.png'
import product_image1 from './assets/images/image-product-1.jpg'
import product_image2 from './assets/images/image-product-2.jpg'
import product_image3 from './assets/images/image-product-3.jpg'
import product_image4 from './assets/images/image-product-4.jpg'
import product_thumbnail from './assets/images/image-product-1-thumbnail.jpg'
import { CartContext } from './contexts/CartContext'

function App() {
    const [cartContents, setCartContents] = useState([])

    const addItemToCart = (item) => {
        const cartMatch = cartContents.find(
            (cartItem) => cartItem.name === item.name
        )
        if (cartMatch) {
            const filteredCart = cartContents.filter(
                (cartItem) => cartItem.name !== item.name
            )
            cartMatch.quantity += item.quantity
            setCartContents([...filteredCart, cartMatch])
        } else {
            setCartContents([...cartContents, item])
        }
    }

    const removeLastItemFromCart = () => {
        const newCartContents = [...cartContents]
        newCartContents.pop()
        setCartContents(newCartContents)
    }

    return (
        <>
            <CartContext.Provider
                value={[cartContents, addItemToCart, removeLastItemFromCart]}
            >
                <SneakersHeader
                    userIcon={jimmy_profile_picture}
                    userName="Jimmy Jimbo"
                />
                <ProductPurchasePage
                    product={{
                        brand: 'Sneaker Company',
                        name: 'Fall Limited Edition Sneakers',
                        description:
                            'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
                        cost: 250.0,
                        percentOff: 50,
                        salePrice: 125.0,
                        images: [
                            {
                                id: '1',
                                image: product_image1,
                                alt: "Image of two sneakers; the sneaker closest is displaying its side profile and the second sneaker's bottom is displayed.",
                            },
                            {
                                id: '2',
                                image: product_image2,
                                alt: 'Image of two seakers; the sneaker closest is facing away with its side profile show and the second shoe is sitting on it tip showing the top and side profile.',
                            },
                            {
                                id: '3',
                                image: product_image3,
                                alt: 'Image of one sneaker; the sneaker is sitting atop two smooth rocks that are stacked on top of eachother and is showing its top and side profile.',
                            },
                            {
                                id: '4',
                                image: product_image4,
                                alt: 'Image of one sneaker;  the sneaker is sitting atop two smooth rocks that are stacked on top of eachother and is showing its side profile.',
                            },
                        ],
                        thumbnail: product_thumbnail,
                    }}
                />
                <div className="attribution mt-12 mb-4 text-xs sm:text-sm text-center text-gray-500">
                    Challenge by&nbsp;
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        className="underline text-gray-700 font-medium hover:text-black"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by&nbsp;
                    <a
                        href="https://github.com/ianwilk20"
                        className="underline text-gray-700 font-medium hover:text-black"
                    >
                        Ian Wilkinson
                    </a>
                    .
                </div>
            </CartContext.Provider>
        </>
    )
}

export default App
