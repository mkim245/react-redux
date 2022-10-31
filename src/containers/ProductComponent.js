import React from 'react';
import { useSelector } from "react-redux";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.product);
  // const {id, title} = products[0];

  return (
    <div className="four colum wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content" style= {{margin: "100px"}}>
            {/* <div className="header">{title}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent
