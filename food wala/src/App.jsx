import { useEffect, useState } from "react";
import Head from "./component/Head";
import Footer from "./component/Footer";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./component/Body";
import AllRestorent from "./component/AllRestaurant";
import Restaurant from "./component/Restaurant";
import { Provider } from "react-redux";
import store from "./Utilities/Store";

function App() {
  return (
    <>
    <Provider store={store}>
      <Head/>
      <Body/>
      <Footer/>

    </Provider>
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: []
  },
  {
    path: "/Restaurant/:resId",
    element: <Restaurant />
  }
]);
export default App;
