import  "./header.css"
const Header = () => {

    return(
        <header className="header">
			<p className="suptitle suptitle-light">managed it services</p>
			<h2 className="subtitle subtitle-light subtitle-hero">Global Managed <br /> IT Services</h2>
			{/* <img src="/src/assets/img/about-image-left.png"/> */}
			<a href="#" className="btn">Get Started</a>
		</header>
    )
}

export default Header