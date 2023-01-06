import { Link } from "react-router-dom"
import "./partiehaute/menu.css"
const Menu = () => {
    return (
       

        <nav className="menu">
				{/* <a href="index.html">home</a>
				<a href="services.html">services</a> */}
				<Link to={ '/' }>Home</Link>
        		<Link to={ '/service' }>Service</Link>
				<Link to={ '/project' }>Projects</Link>
				<Link to={ '/blog' }>Blog</Link>
				<Link to={ '/contact' }>Contact</Link>
				<Link to={ '/form' }>sign-in</Link>


			</nav>
           

)
}

export default Menu