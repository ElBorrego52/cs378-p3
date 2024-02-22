import React, { useState } from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, updateQuantity, quantity }) => {
    const imagePath = require(`../images/${imageName}`);

    return (
        <div className="row text-center section menu-item">
            <div className="col menu">
                <div className="row mb-2">
                    <div className="col-4">
                        <img src={imagePath} className="img-fluid menu-image" alt="O's Cafe ribeye steak picture"/>
                    </div>
                    <div className="col-8">
                        <div className="row mb-2">
                            <div className="col food-name">
                                {title}
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col food-desc">
                                {description}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 price">
                                {price}
                            </div>
                            <div className="col-4 menu-item-actions circle-btn-container">
                                <button onClick={() => updateQuantity(quantity - 1)} disabled={quantity === 0} className="circle-btn">-</button>
                                <span className="quantity">{quantity}</span>
                                <button onClick={() => updateQuantity(quantity + 1)} className="circle-btn">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;

