import "./Header.scss";

import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import {TbSearch} from 'react-icons/tb';
import {CgShoppingCart} from 'react-icons/cg';
import {AiOutlineHeart} from 'react-icons/ai';

import Search from './Search/Search';
import Cart from '../Cart/Cart';
import { Context } from "../../utils/context";




const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showShearch, setShowSearch] = useState(false);

    const navigate = useNavigate();

    const handleScroll = () => {
        const offset = window.scrollY;
        // console.log(offset);
        if(offset > 200){
            setScrolled(true);
        } else{
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

    }, [])

    return <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate('/')}>Home</li>
                        <li>About</li>
                        <li onClick={() => navigate('/category')}>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate('/')}>
                        IdealsMetal.
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)}/>
                        {/* <TbSearch onClick={() => setShowSearch(true)}/> */}
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <CgShoppingCart />
                            <span>5</span>
                        </span>
                    </div>
                </div>
           </header>
           {showCart && <Cart setShowCart={setShowCart}/>}
           { showShearch && <Search setShowShearch={setShowSearch}/>}
           </>;
};

export default Header;
