import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"
import './app.scss';
import Product from "./Pages/Product/Product";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Prodcuts/Products";
import Navbar from "./Compents/Navbar/Navbar";
import Footer from "./Compents/Footer/Footer";


const Layout=()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },

    ]

  },

])
function App() {
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
