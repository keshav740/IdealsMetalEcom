import { MdClose } from "react-icons/md";

import { useState } from "react";

import useFetch from '../../../hooks/useFetch';

import { useNavigate } from 'react-router-dom';

import React from 'react'

const MainFiter = ({setShowShearch}) => {



    // const  [query , setQuery] = useState();
    // const navigate = useNavigate();
  
    // const onChange = (e) =>{
    //   setQuery(e.target.value);
    // };
  
    // let { data } = useFetch(`/api/products?populate=*&filters[material][$eq]=${query}`);
    // // console.log("/api/products?populate=*&filters[title][$contains]=${query}&filters[desc][$contains]=${query}");
    
    // // 
  
    // if(!query){
    //   data = null;
    // }
  
    // return (
    //   <div className="search-model">
    //     <div className="form-field">
    //       <input type="text" autoFocus placeholder="Search For" value={query} onChange={onChange} />
    //       <MdClose onClick={() => setShowShearch(false)} />
    //     </div>
         
  
    //      <div className="search-result-content">
    //        <div className="search-results">
    //          {data?.data?.map(item => (
    //           <div key={item.id} className="search-result-item" onClick={() => {
    //             navigate("/product/" + item.id)
    //             setShowShearch(false);
    //           }}>
    //           <div className="img-container">
    //             <img src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" />
    //           </div>
    //           <div className="prod-details">
    //             <span className="name">{item.attributes.title}</span>
    //             <span className="desc">{item.attributes.desc}</span>
    //           </div>
    //         </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // );

//     const  [output , setOutput] = useState();
//   const navigate = useNavigate();
//   const onChange = (e) =>{
//     setOutput(e.target.value);
//   };

//   let { data } = useFetch(`/api/products?populate=*&filters[material][$contains]=${output}`);
// //   console.log(data);

//   if(!output){
//     data = null;
//   }
//   return (
//     <div>
            
//     </div>
//   );
}


export default MainFiter;
