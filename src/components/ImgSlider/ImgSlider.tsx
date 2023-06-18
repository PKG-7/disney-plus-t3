import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { type iSliderData } from "../../../AppData/slider";
import style from "./ImgSlider.module.scss";

export default function ImgSlider({
  sliderData,
}: {
  sliderData: iSliderData[];
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider className={style.slider} {...settings}>
      {sliderData.map((item) => {
        return (
          <div key={item.id} className={style.wrap}>
            <Image
              src={item.image}
              height={2000}
              width={2000}
              alt={item.altTag}
            />
          </div>
        );
      })}
    </Slider>
  );
}
