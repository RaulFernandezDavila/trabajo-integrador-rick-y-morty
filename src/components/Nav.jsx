import SearchBar from "./SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";

const Nav = ({onSearch})=>{
    return(
        <div>
            <SearchBar onSearch={onSearch}/>

            <Link to="/home">
            <button>Home</button>
            </Link>

            <NavLink to="/about">
            <button>About</button>
            </NavLink>
        </div>
    )
};

export default Nav