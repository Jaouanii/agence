import RootLayout from "../../layouts/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage";
import ServicePage from "../pages/Servicepage";
import ProjectPage from "../pages/Projectpage";
import Blogpage from "../pages/Blogpage";
import Contactpage from "../pages/Contactpage";
import Formpage from "../pages/Formpage";


const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "service",
				element: <ServicePage />,
			},
            {
				path: "project",
				element: <ProjectPage />,
			},
            {
				path: "blog",
				element: <Blogpage/>,
			},

            {
				path: "contact",
				element: <Contactpage/>,
			},
			{
				path: "form",
				element: <Formpage/>,
			},

		],
	},
]);

export default router;
