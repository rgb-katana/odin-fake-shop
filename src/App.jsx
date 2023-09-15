import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./features/ui/AppLayout";
import Error from "./features/ui/Error";
import Home from "./features/ui/Home";
import Shop from "./features/shop/Shop";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:page",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
