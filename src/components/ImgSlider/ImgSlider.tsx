import Slider from "react-slick";
import style from "./ImgSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={style.slider}>
      <Slider {...settings}>
        <div className={style.wrap}>
          <Image
            src="/images/slider-badging.jpg"
            height={2000}
            width={2000}
            alt=""
          />
        </div>
        <div className={style.wrap}>
          <Image
            src="/images/slider-badag.jpg"
            height={2000}
            width={2000}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
