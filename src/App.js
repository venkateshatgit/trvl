import './App.css';
import { useState } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom';

import { UserProvider } from './context/user.context';
import { ProductsProvider } from './context/product.context';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { CartProvider } from './context/cart.context';


function App() {

  //creating router
  // OutLet component replaces the childern element 
  const router = createBrowserRouter([
    {
      element:(
        <>
          <Header />
          <Outlet/>   
        </>
      ),
      children: [
        {
          path: '/',
          element: <HomePage />
        },
    
        {
          path: '/shop',
          element: <ShopPage />
        },

        {
          path: '/auth',
          element: <SignInAndSignUpPage/>,
        }
      ],
      errorElement: (
        <>
          <Header/>
          404 Error, Page not found 
        </>
      )
    }
  ]);

  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <div className="App">
            <RouterProvider router={router} />
          </div>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
}
export default App;
