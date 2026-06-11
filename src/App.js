import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from "react";
import AddItem from "./components/AddItem";
import iphone_img from './images/iphone_img.jpg';
import i_image from './images/i_image.avif'

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10s Max",
      quantity: 0,
      image:iphone_img
    },

    {
      price: 9999,
      name: "Readmi Note 10s Max",
      quantity: 0,
      image:i_image
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];

    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    newTotalAmount -= newProductList[index].price * newProductList[index].quantity;
    newProductList.splice(index ,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem=(name,price,image)=>{
    let newProductList=[...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0,
      image,
        });
    setProductList(newProductList);

  }

  return (
    <>
      <Navbar />

      <main className="container mt-5">
        <AddItem addItem={addItem }/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>

      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
