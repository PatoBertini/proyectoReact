import React from "react";

const ItemListContainer = (prop) => {
  return (
    <div>
      <h1>la empresa se llama {prop.empresa} traido desde una prop.</h1>
    </div>
  );
};

export default ItemListContainer;
