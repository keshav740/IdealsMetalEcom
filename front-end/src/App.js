import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import AppContext from './utils/context';

import MainCat from './components/MainCat/MainCat';


import MainFiter from './components/Header/MainFilter/MainFiter';
import Filter from './components/Header/Search/Filter';


// import MainCat from './components/MainCat/MainCat';
// import StrapiDataFetcher from './components/Header/MainFilter/dataF';
// import Filter from './components/Header/Search/Mainfilt/Filter';
// import Category from './components/Home/Category/Category';




function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                    <Routes>
                        <Route  path="/" element={ <Home />} />
                        <Route  path="/category/:id" element={ <Category /> } />
                        {/* <Route  path="/category" element={ <Category /> } /> */}
                        <Route  path="/product/:id" element={ <SingleProduct /> } />
                        {/* <Route path='/footer' element={< Footer/>}/> */}
                        {/* <Route path='/filter' element={< Filter/>}/> */}
                        {/* <Route path='/filter' element={<MainFiter />}/> */}
                        {/* <Route path='/strapi' element={< StrapiDataFetcher/>}/> */}
                        <Route path='/category' element={< MainCat/>}/>
                        <Route path='/fil' element={< Filter/>}/>
                    </Routes>
                <Newsletter />
                
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
