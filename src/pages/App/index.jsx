import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "@/Context";
import Home from "@/pages/Home";
import MyAccount from "@/pages/MyAccount"
import MyOrder from "@/pages/MyOrder"
import MyOrders from "@/pages/MyOrders"
import NotFound from "@/pages/NotFound"
import SignIn from "@/pages/SignIn"
import Navbar from "@/Components/Navbar";
import "@/pages/App/App.css";


const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
    // Agrega aquí tus otras rutas si es necesario
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes />
      <Navbar/>
    </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
