import { NavLink } from "react-router-dom"
import '../../App.css'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to={'/'}><button className="btn">Home</button></NavLink>
                            <NavLink to={'/listedBooks'}><button className="btn">Listed Books</button></NavLink>
                            <NavLink to={'/pagesToRead'}><button className="btn">Pages to Read</button></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-extrabold">BookVibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal ">
                        <NavLink to={'/'}><button className="btn">Home</button></NavLink>
                        <NavLink to={'/listedBooks'}><button className="btn">Listed Books</button></NavLink>
                        <NavLink to={'/pagesToRead'}><button className="btn">Pages to Read</button></NavLink>
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <a className="btn btn-outline">sign in</a>
                    <a className="btn btn-outline">sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar