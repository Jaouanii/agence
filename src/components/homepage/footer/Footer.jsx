import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
			<h2 className="footer-logo">agency</h2>
			<p className="footer-socials">
				<a href="" target="_blank" rel="noreferrer">
					<img src="/src/assets/img/facebook.png" alt=""/>
				</a>
				<a href="" target="_blank" rel="noreferrer">
					<img src="/src/assets/img/twitter.png" alt=""/>
				</a>
				<a href="" target="_blank" rel="noreferrer">
					<img src="/src/assets/img/instagram.png" alt=""/>
				</a>
				<a href="" target="_blank" rel="noreferrer">
					<img src="/src/assets/img/snapchat.png" alt=""/>
				</a>
				<a href="" target="_blank" rel="noreferrer">
					<img src="/src/assets/img/pinterest.png" alt=""/>
				</a>
				<a href="" target="_blank" rel="noreferrer">
					<img src="/src/assets/img/youtube.png" alt=""/>
				</a>
			</p>
			<p className="footer-links">
				<a href="">Privacy</a>
				<a href="">Support</a>
				<a href="">Helpdesk</a>
				<a href="">Faq</a>
			</p>
		</footer>
    )
}
export default Footer