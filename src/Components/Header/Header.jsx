import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul className="flex gap-10">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/category">Category</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;