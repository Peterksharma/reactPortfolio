import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Navlink exact to ="/" activeClassName="active">About Me</Navlink>
        </nav>
    )
}

export default Navigation;ç