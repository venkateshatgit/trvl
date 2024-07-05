import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

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
          path: 'sign-in-and-sign-up',
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
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>

  );
}

export default App;
