import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <NavLink exact to ="/" activeClassName="active">About Me</NavLink>
            <NavLink to="/Contact" activeClassName='active'>Contact</NavLink>
            <NavLink to="/Portfolio" activeClassName='active'>Portfolio</NavLink>
            <NavLink to="/Resume" activeClassName='active'>Resume</NavLink>
        </nav>
    )
}

export default Navigation;