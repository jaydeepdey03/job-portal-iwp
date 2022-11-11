import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './Navbar.css'
import { Context } from '../context/Usercontext'

const Navbar = () => {
    
    const { isAuth, logout } = useContext(Context)

    return (
        <>
            <nav className="nav flex flex-wrap items-center justify-between px-4">
                <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
                    <span className="font-semibold text-xl tracking-tight">My Application</span>
                </div>

                <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
                    <span className="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                    <li className="border-t md:border-none">
                        <a href="/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a>
                    </li>

                    <li className="border-t md:border-none">
                        <a href="/about/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About</a>
                    </li>

                    <li className="border-t md:border-none">
                        <a href="/blog/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Blog</a>
                    </li>
                    {!isAuth ? <li>
                        <Link to="/login" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Login</Link>
                    </li> :
                        <li>
                            <button onClick={logout} className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Logout</button>
                        </li>}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
