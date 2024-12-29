import iconClose from '../assets/images/icon-close.svg'
import PropTypes from 'prop-types'
import SiteNav from './SiteNav'

const MobileMenu = ({ visible, setMenuVisibility }) => {
    if (visible) {
        return (
            <section
                className="absolute w-full z-50"
                style={{ height: document.documentElement.scrollHeight }}
            >
                <ul className="flex h-[inherit]">
                    <li className="bg-white w-8/12 p-6">
                        <img
                            src={iconClose}
                            className="mb-10"
                            onClick={() => setMenuVisibility(false)}
                            alt="Close mobile menu"
                        />
                        <SiteNav device={'mobile'} />
                    </li>
                    <li
                        className="bg-[rgba(0,0,0,0.5)] flex-1"
                        onClick={() => setMenuVisibility(false)}
                    ></li>
                </ul>
            </section>
        )
    }
}

MobileMenu.propTypes = {
    visible: PropTypes.bool.isRequired,
    setMenuVisibility: PropTypes.func.isRequired,
}

export default MobileMenu
