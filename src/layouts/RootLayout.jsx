import Top from "../components/homepage/partiehaute/Top";
import Footer from "../components/homepage/footer/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<div className='container'>
			<Top />
			<Outlet /> 
			<Footer />
		</div>
	);
};

export default RootLayout;


	// pour creer une route:
// 0-install package
// 1- dossier "layouts" dans lequel ficher "RootLayout.jsx"
// 2- mettre les path dans le dossier service/ fichier : router.jsx
// impoorter dans app.jsx
// importer et creer Link dans le menu de navigation (composoant header)

// ---------
// mettre les page qui change
