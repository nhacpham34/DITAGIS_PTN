import React  from 'react';
import ListProduct from "../../../data.json";
import Product from "../container/Product";
function Favorite() {
    return (
        <div className="grid wide container">
          <h2 className="container__title">Danh sách yêu thích</h2>
          <div className="product">
            <ul className="row product__list">
              {ListProduct.map((prd) => {
                if(prd.favourite) {
                  return <Product key={prd.id} prd={prd} />;
                }
              })}
            </ul>
          </div>
      </div>
    );
}
export default Favorite;