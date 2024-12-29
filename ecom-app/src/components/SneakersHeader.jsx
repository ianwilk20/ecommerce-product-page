import PropTypes from 'prop-types'
import hamburger_menu from '../assets/images/icon-menu.svg'
import sneakers_branding from '../assets/images/logo.svg'
import cart_grey from '../assets/images/icon-cart-grey.svg'
import cart_black from '../assets/images/icon-cart-black.svg'
import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import MobileMenu from './MobileMenu'
import SiteNav from './SiteNav'
import Cart from '../components/Cart'

const SneakersHeader = ({ userIcon, userName }) => {
    const [cartContents, ,] = useContext(CartContext)
    const [menuVisibility, setMenuVisibility] = useState(false)
    const [cartVisibility, setCartVisibility] = useState(false)

    const cartItemQuantity =
        cartContents && cartContents.length > 0
            ? cartContents.reduce((acc, curItem) => acc + curItem.quantity, 0)
            : 0

    const showHideMobileMenu = () => {
        setMenuVisibility(!menuVisibility)
    }

    const toggleCartVisibility = () => {
        setCartVisibility(!cartVisibility)
    }

    return (
        <>
            <header className="md:mb-8">
                <MobileMenu
                    visible={menuVisibility}
                    setMenuVisibility={setMenuVisibility}
                />
                <div className="flex justify-between bg-white p-4 md:border-b md:border-gray-300 relative">
                    <div className="flex items-center">
                        <button
                            className="bg-transparent p-2 md:hidden"
                            onClick={() => showHideMobileMenu()}
                        >
                            <img
                                src={hamburger_menu}
                                alt="Hamburger menu icon"
                            />
                        </button>
                        <img
                            src={sneakers_branding}
                            className="pb-1"
                            alt="Sneakers brand logo"
                        />
                        <div className="hidden md:flex pl-12">
                            <SiteNav
                                links={[
                                    { id: '1', title: 'Collections' },
                                    { id: '2', title: 'Men' },
                                    { id: '3', title: 'Women' },
                                    { id: '4', title: 'About' },
                                    { id: '5', title: 'Contact' },
                                ]}
                                device={'desktop'}
                            />
                        </div>
                    </div>
                    <div className="flex items-center md:gap-4">
                        <div>
                            <button
                                className="bg-transparent p-2 relative"
                                onClick={toggleCartVisibility}
                            >
                                {cartContents && cartContents.length > 0 ? (
                                    <>
                                        <div className="bg-orange-500 text-white text-[0.5rem] rounded-xl w-5 absolute top-[0.125rem] right-0">
                                            {cartItemQuantity}
                                        </div>
                                        <img
                                            src={cart_black}
                                            alt="Shopping cart icon"
                                        />
                                    </>
                                ) : (
                                    <img
                                        src={cart_grey}
                                        alt="Shopping cart icon"
                                    />
                                )}
                            </button>
                            <Cart visible={cartVisibility} />
                        </div>

                        <button className="bg-transparent p-2 rounded-full">
                            <img
                                src={userIcon}
                                alt={`Profile picture for ${userName} `}
                                className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] hover:outline-orange-500 hover:outline-2 hover:outline hover:rounded-full"
                            />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

SneakersHeader.propTypes = {
    userIcon: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
}

export default SneakersHeader
