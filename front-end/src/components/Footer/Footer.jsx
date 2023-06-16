import "./Footer.scss";

import { useNavigate } from 'react-router-dom';

import { useContext } from "react";

import { Context} from '../../utils/context'

import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payment from '../../assets/payments.png'

const Footer = () => {
const { categories } = useContext(Context);
  const navigate = useNavigate();

  return(
  <footer className="footer">
    <div className="footer-content">
      <div className="col">
        <div className="title">About</div>
        <div className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          voluptates impedit, ab sapiente ullam rem necessitatibus nulla dolorum
          aspernatur, accusantium, ipsum beatae dolores minus libero ducimus
          repellat aut iusto fugit!
        </div>
      </div>
      <div className="col">
      <div className="title">Contact</div>
      <div className="c-item">
        <FaLocationArrow />
        <div className="text">
          Kothiwal Nagar, Moradabad, U.P, India, 244001
        </div>
      </div>
      <div className="c-item">
        <FaMobileAlt />
        <div className="text">
         Phone: 68383244001
        </div>
      </div>
      <div className="c-item">
        <FaEnvelope />
        <div className="text">
          Email: keshav@gmail.com
        </div>
      </div>
      </div>
      <div className="col">
        <div className="title">Categories</div>
        { categories?.data?.map((item) => (
          <span key={item.id} className="text" onClick={() =>navigate(`/category/${item.id}`)}>{item.attributes.title}</span>
          ))}
        </div>
      <div className="col">
        <div className="title">Pages</div>
        <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Categories</span>
          <span className="text">Contact Us</span>
        </div>
    </div>
    <div className="bottom-bar">
      <div className="bottom-bar-content">
        <div className="text">
          IdealsMetal is the first......................
        </div>
        <img src={payment} alt=""  />
      </div>
    </div>
  </footer>
  );
};

export default Footer;
