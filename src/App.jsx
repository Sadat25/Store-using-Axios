import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root";
import Home from "./Home";
import ProductsDetails from "./ProductsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/product/:id", Component: ProductsDetails },
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
