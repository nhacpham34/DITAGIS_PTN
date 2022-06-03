import React  from 'react';
function Product(props){
    let id = props.prd.id;
    let setLocalStorage = () => {
        localStorage.setItem("id", id);
    }
    let setLike = (e) => {
        let id = e.target.id;
        props.prd.favourite = !props.prd.favourite
    }

    return (
        <li className="col c-3 l-4 d-6 m-12">
            <div className="product__item">
                <div className="product__image">
                    <img width="100%" height="100%" alt="" src={props.prd.avatar}></img>
                    <span className="product__type">{props.prd.type.name}</span>
                    <span onClick={setLike}  className={props.prd.favourite ? 'product__like like--active': 'product__like'}><i id={props.prd.id} class="fas fa-heart"></i></span>
                </div>
                <a onClick={setLocalStorage} href="/Detail" className="product__card-name">
                    <h2 className="product__name">{props.prd.title}</h2>
                    <p className="product__text">{props.prd.address}</p>
                    <p className="product__text">Giá từ: <span className="product__price">{props.prd.price.from} - {props.prd.price.to} tỷ</span></p>
                </a>
            </div>
        </li>
    );
}
export default Product;
