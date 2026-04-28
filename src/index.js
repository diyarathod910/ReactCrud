
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Home } from './home';
// import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import { ProductDetail } from './product_details';
import { Wishlist } from './Wishlist';
import { SignUp } from './signup';
import { Login } from './login';
import { Contact } from './contact';
import { NotFound } from './404';
import { About } from './about';
import { Cart } from './cart';
import { Checkout } from './checkout';
import { Account } from './account';
const routers = createBrowserRouter([
   
    { path: "/", element: <SignUp /> },
    //   { path: "/header", element: <Header /> },
    //   { path: "/footer", element: <Footer /> },
    { path: "/login", element: <Login /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    //   { path: "/extra", element: <Extra /> },
    //   { path: "/category", element: <CategoryProducts /> },

    { path: "/details", element: <ProductDetail /> },
    { path: "/home", element: <Home /> },
    { path: "/wishlist", element: <Wishlist /> },
    { path: "/notfound", element: <NotFound /> },
    { path: "/cart", element: <Cart /> },
    {path:"/checkout",element:<Checkout/>},
     {path:"/account",element:<Account/>},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={routers} />
    </React.StrictMode>
);