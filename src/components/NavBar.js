import { NavLink, Link } from 'react-router-dom'
import CartWidget from "./CartWidget";
import Logo from '../tools.png'
import "./NavBar.css";
const NavBar = () => {
  return (
      <div className="topnav">
        <NavLink to={"/cart"}><CartWidget/></NavLink>
        <NavLink to={"/category/destornilladores"}>Destornilladores</NavLink>
        <NavLink to={"/category/llaves"}>Llaves</NavLink>
        <NavLink to={"/"}>Inicio</NavLink>
        <div className="brand">
        <Link to={'/'}>
        <img className="logo" src={Logo} alt="logo"/>
        <span>Raffa tools</span>
        </Link>
        </div>
      </div>
      
  );
}
export default NavBar
