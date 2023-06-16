// import "./Category.scss";
import { useNavigate } from 'react-router-dom';


import { useContext } from "react";

import { Context} from '../../utils/context'


const MainCat = () => {
    const navigate = useNavigate();
    const { categories } = useContext(Context);
    // console.log(categories)
    return <div className="shop-by-category">
       <div className="categories">
       { categories?.data?.map((item) => (
            <div key={item.id} className="category" onClick={() =>navigate(`/category/${item.id}`)}>
            <img src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" />
        </div>
       ))}
        {/* kehsva */}
       </div>
    </div>;
};

export default MainCat;
