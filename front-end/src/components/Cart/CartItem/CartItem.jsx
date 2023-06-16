import "./CartItem.scss";

import prod from '../../../assets/products/headphone-prod-3.webp'

import { MdClose } from "react-icons/md";

const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">
                    Product Name
                </span>
                <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                            <span>-</span>
                            <span>4</span>
                            <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>x</span>
                        <span className="heighlight">&#8377;9878</span>
                    </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
