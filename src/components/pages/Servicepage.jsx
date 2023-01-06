// import Top from "../homepage/partiehaute/Top";
// import Footer from "../homepage/footer/Footer";
// import Arti from "./Arti";
// import ListMark from "./marque/ListMark";
// import ListService from "./servicee/ListService"
// import "../article/article.css";

import Arti from "../ServicePage/Arti";
import ListMark from "../ServicePage/marque/ListMark";
import ListService from "../ServicePage/servicee/ListService";




const ServicePage = () => {
	return (
		<div className='container'>
			{/* <Top /> */}
			<Arti />
			<ListMark />
			<ListService/>
			{/* <Footer /> */}
		</div>
	);
};

export default ServicePage;