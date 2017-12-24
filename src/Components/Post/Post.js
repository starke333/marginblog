import React from 'react';

const post = (props) => {
    return (
        <div className="Posts">
            <h3>Name: {props.name}</h3>
            <h3>Description: {props.desc}</h3>
            <h3>Buy limit: {props.buy_limit}</h3>
            <h3>Guide price: {props.guide_price}</h3>
            <hr />
        </div>
    )
}



export default post;