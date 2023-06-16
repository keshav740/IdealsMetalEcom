import React, { useEffect, useState } from 'react'

import { fetchData } from '../../../utils/api';


const Filter = () => {

    const [api , setApi] = useState([]);


//   let { data1 } = useFetch(`/api/categories?populate=*&filters[title][$contains]=${query}`);
//   console.log(data);
//   let { data } = useFetch(`/api/products?populate=*&filters[material][$contains]=${query}`);
//   console.log(data1);
useEffect(() => {
    getProducts();
    getCategories();
}, []);

const getProducts = () => {
    fetchData("/api/products?populate=*").then((res) => {
        // console.log(res);
        setApi(res);
    });
};

const getCategories = () => {
    fetchData("/api/categories?populate=*").then((res) => {
        // console.log(res);
        setApi(res); 
    });
};
  return (
    <div>
      {
        api?.api?.map((data , i) => 
            <div>
                <input type="checkbox" value={data[0].material}/><span>{data[0].attributes.material}</span>
            </div>
        )
      }
    </div>
  )

}

export default Filter
