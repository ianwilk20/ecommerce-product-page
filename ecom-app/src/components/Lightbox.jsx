import PropTypes from 'prop-types'
import ProductImage from './ProductImage'

const Lightbox = ({ images, mainImage, visible, setVisiblity }) => {
    return (
        <section
            className={`absolute top-0 left-0 z-20 m-auto bg-black bg-opacity-70 w-[100%] h-[100%] ${
                !visible && 'hidden'
            }`}
        >
            <div className="flex flex-col items-center md:max-w-[35rem] m-auto h-[inherit] gap-4 justify-center">
                <button
                    onClick={() => {
                        setVisiblity(false)
                    }}
                    className="bg-transparent self-end p-0 fill-white hover:fill-orange-500"
                >
                    <svg
                        width="14"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 14 15"
                    >
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
                <ProductImage
                    images={images}
                    mainImage={mainImage}
                    onMainImageClick={null}
                    navigationEnabled={true}
                    imagePreviewStyling={'justify-center px-10'}
                />
            </div>
        </section>
    )
}

Lightbox.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            image: PropTypes.any,
            alt: PropTypes.string,
        })
    ).isRequired,
    mainImage: PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.any,
        alt: PropTypes.string,
    }).isRequired,
    visible: PropTypes.bool.isRequired,
    setVisiblity: PropTypes.func.isRequired,
}

export default Lightbox
