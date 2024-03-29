import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {

  // array to keep track of each menu item quantity. acc = accumulator
  const [quantities, setQuantities] = useState(menuItems.reduce((acc, item) => {
    acc[item.id] = 0; // Initialize a quantity for each menu item
    return acc;
  }, {}));

  // Subtotal tracker 
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Whenever quantities change, recalculate subtotal
    const newSubtotal = menuItems.reduce((acc, item) => {
      return acc + quantities[item.id] * item.price;
    }, 0);
    setSubtotal(newSubtotal);
  }, [quantities]);

  // Function to update quantity either up or down based on button press
  const updateQuantity = (itemId, newQuantity) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: newQuantity
    }));
  };

  // Function to clear all quantities and reset subtotal for "clear" button
  const clearQuantities = () => {
    const resetQuantities = {};
    // Assuming 'menuItems' holds all your menu item data
    menuItems.forEach(item => {
      resetQuantities[item.id] = 0;
    });
    setQuantities(resetQuantities); // Assuming 'setQuantities' is your state setter for quantities
  };

  return (
    <div>
      <div className="header">
        <Header logoName='os-logo.png' desc1='Delicious, From-Scratch Recipes Close at Hand' desc2='The Fresh Choice of UT!' />
      </div>
      <div className="container menu">
        {/* Display menu items dynamically here by iterating over the provided menuItems */}
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} title={menuItem.title} description={menuItem.description} price={menuItem.price} imageName={menuItem.imageName} updateQuantity={(newQuantity) => updateQuantity(menuItem.id, newQuantity)}
          quantity={quantities[menuItem.id]} />
        ))}
      </div>
      <div className="container">
        <Footer subtotal={subtotal.toFixed(2)} clear={clearQuantities} menuItems={menuItems} quantities={quantities}/>
      </div>
    </div>
  );
}

export default App;
