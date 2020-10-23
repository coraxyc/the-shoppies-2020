import React from 'react';
import '../styles/Card.css'

function Card(props) {
  return (
    <div className="Card">
      <div className="title">
        {props.isBold ? <b>{props.title}</b> : props.title}
      </div>
      {props.children}
    </div>
  );
}

export default Card;
