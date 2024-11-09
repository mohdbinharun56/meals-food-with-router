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
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;