import React from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Footer from "./components/Footer";
function App() {
  const navbar = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    {
      name: "OUR PRODUCTS",
      id: "product",
      child: [
        { name: "PRODUCT 1", id: "p1" },
        { name: "PRODUCT 2", id: "p2" },
        { name: "PRODUCT 3", id: "p3" },
        { name: "PRODUCT 4", id: "p4" },
      ],
    },
    { name: "CONTACT US", id: "contact" },
  ];
  return (
    <div>
      <Header />
      <Logo />
      <Navbar items={navbar} />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
