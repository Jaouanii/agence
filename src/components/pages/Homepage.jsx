
import Article from "../homepage/article/Article";
import Header from "../homepage/header/Header";
import Section3Cols from "../homepage/section/Section3Cols";

const HomePage = () => {
	return (
		<div className='container'>
			{/* <Top /> */}
			<Header />
			<Article />
			<Section3Cols />
			{/* <Footer /> */}
		</div>
	);
};

export default HomePage;