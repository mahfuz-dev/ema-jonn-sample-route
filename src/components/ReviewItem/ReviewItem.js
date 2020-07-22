import React from 'react';

const ReviewItem = (props) => {
    const{name,quantity,key,price} = props.product;
    const ReviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={ReviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>Price:{price}</small></p>
            <br/>
            {/* <button onClick={ ()=>props.removeProduct(key)} className="main-button">Remove</button> */}
        </div>
    );
};

export default ReviewItem;