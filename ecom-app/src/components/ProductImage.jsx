import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const ProductImageTemp = ({
    images,
    mainImage,
    onMainImageClick,
    navigationEnabled,
    imagePreviewStyling,
}) => {
    const [curImage, setImage] = useState({
        index: mainImage ? images.indexOf(mainImage) : 0,
        image: mainImage ? mainImage.image : images[0].image,
        alt: mainImage ? mainImage.alt : images[0].alt,
    })

    useEffect(() => {
        if (mainImage) {
            setImage({
                index: images.indexOf(mainImage),
                image: mainImage.image,
                alt: mainImage.alt,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mainImage])

    const prevImage = () => {
        if (curImage.index === 0) {
            setImage({
                index: images.length - 1,
                image: images[images.length - 1].image,
                alt: images[images.length - 1].alt,
            })
        } else {
            setImage({
                index: curImage.index - 1,
                image: images[curImage.index - 1].image,
                alt: images[curImage.index - 1].alt,
            })
        }
    }

    const nextImage = () => {
        if (curImage.index === images.length - 1) {
            setImage({ index: 0, image: images[0].image, alt: images[0].alt })
        } else {
            setImage({
                index: curImage.index + 1,
                image: images[curImage.index + 1].image,
                alt: images[curImage.index + 1].alt,
            })
        }
    }

    const setMainImage = (index) => {
        setImage({
            index: index,
            image: images[index].image,
            alt: images[index].alt,
        })
    }

    console.log(curImage.alt)

    return (
        <div className="flex flex-col gap-8">
            <div className="relative">
                <button
                    className={`absolute left-2 bottom-1/2 rounded-full bg-white p-3 ${
                        !navigationEnabled && 'md:hidden'
                    } md:left-0 md:-translate-x-1/2 md:p-4 stroke-black hover:stroke-orange-500`}
                    onClick={prevImage}
                >
                    <svg
                        viewBox="0 0 12 18"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[12px] h-[12px] md:w-[15px] md:h-[15px] stroke-inherit"
                        aria-label="[title]"
                    >
                        <title>Arrow pointing left icon</title>
                        <path
                            d="M11 1 3 9l8 8"
                            strokeWidth="3"
                            fill="none"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
                <button
                    className={`absolute right-2 bottom-1/2 rounded-full bg-white p-3 ${
                        !navigationEnabled && 'md:hidden'
                    } md:right-0 md:translate-x-1/2 md:p-4 stroke-black hover:stroke-orange-500`}
                    onClick={nextImage}
                >
                    <svg
                        viewBox="0 0 13 18"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[12px] h-[12px] md:w-[15px] md:h-[15px]"
                        aria-label="[title]"
                    >
                        <title>Arrow pointing right icon</title>
                        <path
                            d="m2 1 8 8-8 8"
                            strokeWidth="3"
                            fill="none"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
                <img
                    src={curImage.image}
                    className="md:rounded-2xl"
                    onClick={() =>
                        typeof onMainImageClick === typeof Function &&
                        onMainImageClick(images[curImage.index].id)
                    }
                    alt={curImage.alt}
                />
            </div>
            {/* Image preview */}
            <ul
                className={`hidden md:flex md:gap-6 lg:gap-6 xl:gap-8 ${
                    imagePreviewStyling
                        ? imagePreviewStyling
                        : 'justify-between'
                } `}
            >
                {images.map((item, index) => {
                    const imageSelected = curImage.index === index
                    return (
                        <li key={item.id}>
                            <button
                                className={`w-auto border-none bg-white p-0 rounded-xl ${
                                    imageSelected &&
                                    'outline outline-2 outline-orange-500'
                                } focus-visible:outline-orange-500 focus:outline-orange-500`}
                                onClick={() => setMainImage(index)}
                            >
                                <img
                                    src={item.image}
                                    className={`rounded-xl hover:opacity-30 focus-visible:opacity-60 focus:opacity-60 ${
                                        imageSelected && 'opacity-50'
                                    }`}
                                    alt={item.alt}
                                />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

ProductImageTemp.propTypes = {
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
    }),
    navigationEnabled: PropTypes.bool.isRequired,
    onMainImageClick: PropTypes.func,
    imagePreviewStyling: PropTypes.string,
}

export default ProductImageTemp
