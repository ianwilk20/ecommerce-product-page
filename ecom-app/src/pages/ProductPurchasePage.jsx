import ProductDetails from '../components/ProductDetails'
import PropTypes from 'prop-types'

const ProductPurchasePage = ({ product }) => {
    return (
        <main className="md:px-8 md:py-4 lg:px-32 lg:py-8">
            <ProductDetails
                brand={product.brand}
                name={product.name}
                description={product.description}
                cost={product.cost}
                percentOff={product.percentOff}
                salePrice={product.salePrice}
                images={product.images}
                thumbnail={product.thumbnail}
            />
        </main>
    )
}

ProductPurchasePage.propTypes = {
    product: PropTypes.shape({
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
    }),
}

export default ProductPurchasePage
