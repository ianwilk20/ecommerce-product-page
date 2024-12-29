import PropTypes from 'prop-types'

const SiteNavLinks = ({
    links = [
        { id: '1', title: 'Collections' },
        { id: '2', title: 'Men' },
        { id: '3', title: 'Women' },
        { id: '4', title: 'About' },
        { id: '5', title: 'Contact' },
    ],
    device,
}) => (
    <nav className="flex">
        <ul
            className={
                device === 'mobile'
                    ? 'flex flex-col items-start gap-4 font-bold text-black text-lg'
                    : 'flex md:gap-6 lg:gap-8 items-center'
            }
        >
            {links.map((item) => {
                return (
                    <li key={item.id}>
                        <a
                            href="#"
                            className={
                                device === 'mobile'
                                    ? 'text-inherit'
                                    : "relative text-gray-600 hover:text-black before:content-[''] before:bg-orange-500 before:h-[5px] before:block before:w-full before:absolute before:top-[250%] before:transition-[0.5s] before:scale-x-0 hover:before:scale-100 hover:before:origin-center"
                            }
                        >
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    </nav>
)

SiteNavLinks.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string, title: PropTypes.string })
    ),
    device: PropTypes.oneOf(['mobile', 'desktop']),
}

export default SiteNavLinks
