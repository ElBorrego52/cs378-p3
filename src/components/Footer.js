import React from 'react';

const Footer = ({ subtotal, clear, menuItems, quantities}) => {
    const orderPlaced = () => {
        let orderSummary = "";
        let totalItems = 0;

        menuItems.forEach(item => {
        const quantity = quantities[item.id];
        if (quantity > 0) {
            orderSummary += `${quantity} ${item.title} `;
            totalItems += quantity;
        }
        });

        if (totalItems === 0) {
            alert("No items in cart");
        } else {
            alert(`Order placed!\n${orderSummary}`);
        }
    };

    return (
        <div className="footer">
        <div className="subtotal">Subtotal ${subtotal}</div>
        <button onClick={orderPlaced} className="order-btn">Order</button>
        <button onClick={clear} className="clear-all-btn">Clear All</button>
        </div>
    );
};

export default Footer;
