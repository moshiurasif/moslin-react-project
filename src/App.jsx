// import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Inventory from "./components/Inventory/Inventory"
import Shop from "./components/Shop/Shop"
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"
import Main from "./layout/Main"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [

        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/shop",
          element: <Shop/>
        },
        {
          path: "/review",
          element: <Home/>
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/inventory",
          element: <Inventory/>
        },
        {
          path: "/checkout",
          element: <Checkout/>
        },
        {
          path: "/signin",
          element: <SignIn/>
        },
        {
          path: "/signup",
          element: <SignUp/>
        },
      ]

}
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
