import "./Search.scss";

import { MdClose } from "react-icons/md";

import prod from "../../../assets/products/headphone-prod-3.webp";


import { useState } from "react";

import useFetch from '../../../hooks/useFetch';

import { useNavigate } from 'react-router-dom';
import Filter from "./Filter";

const Search = ({ setShowShearch }) => {
  const  [query , setQuery] = useState();
  const navigate = useNavigate();

  const onChange = (e) =>{
    setQuery(e.target.value);
  };

  let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
  // console.log("/api/products?populate=*&filters[title][$contains]=${query}&filters[desc][$contains]=${query}");
  
  let { data1 } = useFetch(`/api/categories?populate=*&filters[title][$contains]=${query}`);
  // console.log("/api/categories?populate=*&filters[title][$contains]=${query}`");
  

  if(!query){
    data = null;
  }

  return (
    <div className="search-model">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search For Products" value={query} onChange={onChange} />
        <MdClose onClick={() => setShowShearch(false)} />
      </div>

      <div className="search-result-content">
        {/* <Filter /> */}
        <div className="search-results">
          {data?.data?.map(item => (
            <div key={item.id} className="search-result-item" onClick={() => {
              navigate("/product/" + item.id)
              setShowShearch(false);
            }}>
            <div className="img-container">
              <img src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">{item.attributes.title}</span>
              <span className="desc">{item.attributes.desc}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
