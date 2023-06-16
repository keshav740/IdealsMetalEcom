import "./Home.scss";

import { useEffect, useContext } from "react";

import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context";

import { fetchData } from '../../utils/api'
import Footer from "../Footer/Footer";
// import Filter from "../Header/Search/Mainfilt/Filter";

const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);
    // console.log("cate",categories);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetchData("/api/products?populate=*").then((res) => {
            console.log(res);
            setProducts(res);
        });
    };

    const getCategories = () => {
        fetchData("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
        });
    };

    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category categories={categories} />
                <Products products={products} headingText="Popular Products" />
                {/* < Footer categories={categories}/> */}
                {/* <Filter/> */}
            </div>
        </div>
    </div>;
};

export default Home;
