import ProductImage from './ProductImage'
import PropTypes from 'prop-types'
import CartQuantityCounter from '../components/CartQuantityCounter'
import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import Lightbox from '../components/Lightbox'

const ProductDetails = ({
    brand,
    name,
    description,
    cost,
    percentOff,
    salePrice,
    images,
    thumbnail,
}) => {
    const [lightboxVisibility, setLightboxVisibility] = useState(false)
    const [lightboxMainImage, setLightboxMainImage] = useState(images[0])

    const [, addItemToCart] = useContext(CartContext)

    const addProductToCart = (quantity) => {
        if (quantity > 0) {
            addItemToCart({
                name,
                description,
                cost: salePrice || cost,
                thumbnail,
                quantity,
            })
        }
    }

    const showLighbox = (image_id) => {
        setLightboxVisibility(true)
        const foundImage = images.find((image) => image.id === image_id)

        if (foundImage) {
            setLightboxMainImage(foundImage)
        } else {
            setLightboxMainImage(images[0])
        }
    }

    return (
        <section className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-16">
            <ProductImage
                images={images}
                mainImage={null}
                onMainImageClick={showLighbox}
                navigationEnabled={false}
            />
            <Lightbox
                images={images}
                mainImage={lightboxMainImage}
                visible={lightboxVisibility}
                setVisiblity={setLightboxVisibility}
            />
            <div className="flex flex-col gap-4 px-6 pt-2 md:justify-center md:gap-6">
                <div className="flex flex-col items-start md:gap-2">
                    <span className="uppercase font-bold text-xs tracking-widest text-gray-600 mb-2">
                        {brand}
                    </span>
                    <h2 className="font-bold text-3xl text-black text-left mb-4 md:text-4xl">
                        {name}
                    </h2>
                    <p className="text-sm text-gray-600 text-left leading-6">
                        {description}
                    </p>
                </div>
                <div className="flex justify-between items-center md:flex-col md:items-start md:gap-2">
                    <div className="flex gap-3">
                        <span className="font-bold text-3xl text-black text-left">
                            ${salePrice && `${salePrice.toFixed(2)}`}
                        </span>
                        {percentOff && (
                            <span className="font-bold rounded-md bg-black text-white text-sm px-2 py-1 self-center">
                                {percentOff}%
                            </span>
                        )}
                    </div>
                    {cost && (
                        <span className="font-bold text-md text-gray-600 line-through">
                            ${cost.toFixed(2)}
                        </span>
                    )}
                </div>
                <CartQuantityCounter addToCart={addProductToCart} />
            </div>
        </section>
    )
}

ProductDetails.propTypes = {
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    percentOff: PropTypes.number,
    salePrice: PropTypes.number,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            image: PropTypes.any,
            alt: PropTypes.string,
        })
    ).isRequired,
    thumbnail: PropTypes.string.isRequired,
}

export default ProductDetails
