import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLaout from "./Components/RootLaout";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLaout />}>
      <Route index element={<Home />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
