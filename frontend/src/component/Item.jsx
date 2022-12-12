import React from "react";

function Item(props) {
  const href = "/books/" + props.book.id;
  return (
    <a href={href} className="card item ">
      <img
        className="card-img-top thumbnail"
        src={props.book.image}
        alt="book"
      />
      <div className="card-body">
        <h5 className="card-title title">{props.book.title}</h5>
        <p className="card-text limit-text">{props.book.description}</p>
      </div>
    </a>
  );
}

export default Item;
