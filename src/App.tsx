import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./components/main/home/home";
import Client from "./layout/client";
import ProductPage from "./components/product/productPage/product";
import ProductSingle from "./components/single-page/single-page";
import Admin from "./layout/admin";
import ProductList from "./components/product/product-list/product-list";
import ProductAdd from "./components/product/product-add/product-add";
import ProductContext from "./context/product.context";
import ProductEdit from "./components/product/product-edit/product-edit";
import CategoryContext from "./context/category.context";
import ListCate from "./components/category/category-list/category-list";
import EditCategory from "./components/category/category-edit/category-edit";
import Search from "./components/Search/search";
import CategoryProducts from "./components/single-page/CategoryProducts";
import AddCategory from "./components/category/category-add/category-add";
import AppContext from "./context/appContext";
import CartContext from "./context/cart";
import Cart from "./components/cart/cart";
import Checkout from "./components/cart/checkout";

function App() {
  const router = useRoutes([
    {
      path: "",
      element: (
        <CartContext>
          <CategoryContext>
            <ProductContext>
              <AppContext>
                <Client />
              </AppContext>
            </ProductContext>
          </CategoryContext>
        </CartContext>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "category/:id", element: <CategoryProducts /> },
        { path: "search", element: <Search /> },
        { path: "products", element: <ProductPage /> },
        { path: "deital/:id", element: <ProductSingle /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: <Checkout /> },
      ],
    },
    {
      path: "/admin/",
      element: (
        <CategoryContext>
          <ProductContext>
            <Admin />
          </ProductContext>
        </CategoryContext>
      ),
      children: [
        { path: "", element: <ProductList /> },
        { path: "add", element: <ProductAdd /> },
        { path: "edit/:id", element: <ProductEdit /> },
        { path: "list-category", element: <ListCate /> },
        { path: "add-category", element: <AddCategory /> },
        { path: "list-category/edit-category/:id", element: <EditCategory /> },
      ],
    },
  ]);

  return router;
}

export default App;
