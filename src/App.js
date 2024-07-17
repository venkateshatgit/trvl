import './App.css';
import { useState } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom';

import { UserProvider } from './context/user.context';
import { CategoriesProvider } from './context/categories.context';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { CartProvider } from './context/cart.context';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import CategoriesPreview from './pages/categories-preview/categories-preview.component';
import Category from './pages/Category/category.component';


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
          element: (
            <>
              <Outlet/>
            </>
          ),
          children: [
            {
              path: '/shop',
              element: <CategoriesPreview/>
            },

            {
              path: '/shop/:category',
              element: <Category/>
            }
          ]
        },

        {
          path: '/auth',
          element: <SignInAndSignUpPage/>,
        },

        {
          path: '/checkout',
          element: <CheckoutPage/>,
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
      <CategoriesProvider>
        <CartProvider>
          <div className="App">
            <RouterProvider router={router} />
          </div>
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  );
}
export default App;
