import './header.css';
import React  from 'react';
function Header()
{
    return(
        <div className=" header">
            <div className="grid wide header-top">
                <a href="/" className="header-top__left">
                    <img className="header-top__img" alt="" src="./logo/logo.png"></img>
                    <a href="/" className="header-top__name"><span style={{color: 'red'}}>D</span>itagis <span style={{color: 'blue'}}>R</span>ent</a>
                </a>
                <a href="/yeuthich" className="header-top__like">
                    <i class="fas fa-heart"></i> <span>Ưa thích</span>
                </a>
            </div>
        </div>
    );
}
export default Header;