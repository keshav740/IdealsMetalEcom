import "./Banner.scss";

import BannerImg from "../../../assets/products/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium quisquam eligendi nobis natus sit pariatur, eos sed
            saepe maxime possimus libero similique, eum itaque minus adipisci
            velit iusto, cumque eius.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
