import "./container.css";

import Product from "./Product";
import React, { useState } from "react";

import ListProduct from "../../../data.json";


function Container() {
    const [filter, setFilter] = useState('all');
    const [active, setActive] = useState('all');
    let handleBtn = (e) => {
      setFilter(e.target.value);
      setActive(e.target.value);
    }
  return (
    <div>
      <div className="header-banner">
        <img src="./assets/bg-hero_2x.webp" alt="" width="100%" height="100%"></img>
        <div className="header-banner__bg">
          <h1 className="header-banner__title"> Sàn giao dịch bất động sản</h1>
          <div className="header-banner__search">
            <form className="form-search" action="/action_page.php">
              <div className="form-search__input">
                <label className="form-search__label" for="tinh">
                  Tỉnh
                </label>
                <select className="form-search__select" name="tinh" id="tinh">
                  <option value="" selected disabled hidden>
                    Chọn tỉnh
                  </option>
                  <option className="option" value="1">Đà Nẵng</option>
                  <option value="2">Hà Nội</option>
                  <option value="3">Hồ Chí Minh</option>
                </select>
              </div>
              <div className="form-search__input">
                <label className="form-search__label" for="dientich">
                  Diện tích
                </label>
                <select
                  className="form-search__select"
                  name="dientich"
                  id="dientich"
                >
                  <option value="" selected disabled hidden>
                    Chọn diện tích
                  </option>
                  <option value="1">
                    {" "}
                    <i class="fas fa-angle-left"></i> 30 m2
                  </option>
                  <option value="2">30 - 45 m2</option>
                  <option value="3">45 - 60 m2</option>
                  <option value="3">
                    {" "}
                    <i class="fas fa-angle-right"></i> 60 m2
                  </option>
                </select>
              </div>
              <button className="form-search__btn" type="button">
                <i class="fas fa-search"></i> <span>Tìm kiếm</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="grid wide container">
        <h2 className="container__title">Sản phẩm</h2>
        <div className="product__filter">
          <button onClick={handleBtn} value="all" className={active === 'all' ?'product__btn product__btn--active': 'product__btn'} >Tất cả</button>
          <button onClick={handleBtn} value="chungcu" className={active === 'chungcu' ?'product__btn product__btn--active': 'product__btn'} >Chung cư</button>
          <button onClick={handleBtn} value="bietthu" className={active === 'bietthu' ?'product__btn product__btn--active': 'product__btn'} >Biệt thự</button>
          <button onClick={handleBtn} value="shophouse" className={active === 'shophouse' ?'product__btn product__btn--active': 'product__btn'} >Shophouse</button>
          <button onClick={handleBtn} value="condotel" className={active === 'condotel' ?'product__btn product__btn--active': 'product__btn'} >Condotel</button>
        </div>
        <div className="product">
          <ul className="row product__list">
            {ListProduct.map((prd) => {
                if(filter === "all") {
                    return <Product key={prd.id} prd={prd} />;
                } else if (filter === prd.type.value) {
                    return <Product key={prd.id} prd={prd} />;
                }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Container;
