import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import CategoriesPreview from './pages/categories-preview/categories-preview.component';
import Category from './pages/Category/category.component';

import { useEffect} from "react";
import { getCategoriesAndDocument, onAuthStateChangedListner } from "./utils/firebase.utils";
import { setCurrUser } from './store/user/user.slice';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from './store/categories/categories.slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListner((user) => {
        dispatch(setCurrUser(user));
    })

    const getCategoryMap = async() => {
      const categoryMap = await getCategoriesAndDocument();
      dispatch(setCategoriesMap(categoryMap));
    }
    getCategoryMap();
  }, [])


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
          <div className="App">
            <RouterProvider router={router} />
          </div>
  );
}
export default App;
