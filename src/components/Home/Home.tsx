import style from "./Home.module.scss";
import ImgSlider from "../ImgSlider/ImgSlider";
import Movies from "../Movies/Movies";
import Viewers from "../Viewers/Viewers";

export default function Home() {
  return (
    <div className={style.container}>
      <ImgSlider />
      <Viewers />
      <Movies />
    </div>
  );
}
