// import "../article/article.css";

const Arti = () => {
	return (
		<>
			<article className="article article-2cols">
				<div className="article-col article-col-center">
					<p className="suptitle">our vision & mission</p>
					<h2 className="subtitle">Innovate with the tech trends</h2>
					<p className="article-content">
						There are many variations of passages of Lorem Ipsum available but
						the majority have suffered
					</p>
					<a href="" className="btn">
						Read More
					</a>
				</div>
				<div className="article-col">
					<img
						src="/src/assets/imgService/about-image-right.png"
						alt="service"
					/>
				</div>
			</article>
		</>
	);
};
export default Arti;
