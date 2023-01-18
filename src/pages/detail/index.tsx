import Image from "next/image";
import style from "./detail.module.scss";

export default function Detail() {
  return (
    <div className={style.container}>
      <div className={style.background}>
        <Image
          height={200}
          width={200}
          alt=""
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
        />
      </div>

      <div className={style.ImageTitle}>
        <Image
          height={200}
          width={200}
          alt=""
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
        />
      </div>

      <div className={style.controls}>
        <button className={style.playButton}>
          <Image
            height={200}
            width={200}
            alt=""
            src="/images/play-icon-black.png"
          />
          <span>PLAY</span>
        </button>

        <button className={style.TrailerButton}>
          <Image
            height={200}
            width={200}
            alt=""
            src="/images/play-icon-white.png"
          />
          <span>Trailer</span>
        </button>

        <button className={style.addButton}>
          <span>+</span>
        </button>

        <div className={style.groupWatchButton}>
          <Image height={200} width={200} alt="" src="/images/group-icon.png" />
        </div>
      </div>

      <div className={style.subtitle}>
        2018 • 7m • Family, Fantasy, Kids, Animation
      </div>

      <div className="style.description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam
        accusamus iure vero optio debitis dolor id quidem esse tempore veritatis
        minima rerum unde veniam explicabo, omnis quasi rem. Eaque!
      </div>
    </div>
  );
}
