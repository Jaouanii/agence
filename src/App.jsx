import "./assets/css/reset.css";
import "./assets/css/fonts.css";

import { RouterProvider } from 'react-router-dom';
import router from './components/service/Router'

const App = () => <RouterProvider router={ router } />;



export default App;
