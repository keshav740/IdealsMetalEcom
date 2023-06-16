import "./SingleProduct.scss";

import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPinterest, FaCartPlus} from 'react-icons/fa';

import prod from '../../assets/products/speaker-prod-1.webp';

import RelatedProducts from './RelatedProducts/RelatedProducts';

import { useState } from "react";

import { useParams } from "react-router-dom";

import useFetch from '../../hooks/useFetch';




const SingleProduct = () => {
    // const [qunt, setQunt] = useState(); 
    const { id } = useParams();
    // console.log(id);
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);


    if(!data) return;

    const product = data.data[0].attributes

    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={process.env.REACT_APP_URL + product.img.data[0].attributes.url} alt="" />
                </div>
                <div className="right">
                    <span className="name">{product.title}</span>
                    <span className="material">Material : <span className="spn1">{product.material}</span></span>
                    <span className="price">&#8377;{product.price}</span>
                    <span className="desc">{product.desc}</span>


                    <div className="info-item">
                        <span className="text-bold">
                            Category :
                            <span> {product.categories.data[0].attributes.title}</span>
                        </span>
                        <span className="text-bold">
                            Share:
                            <span className="social-icons">
                                <FaFacebookF size={16}/>
                                <FaTwitter size={16}/>
                                <FaInstagram size={16}/>
                                <FaLinkedinIn size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                    </div>

                </div>
            </div>
            <RelatedProducts productId = {id} categoryId = {product.categories.data[0].id} />
        </div>
    </div>;
};

export default SingleProduct;
