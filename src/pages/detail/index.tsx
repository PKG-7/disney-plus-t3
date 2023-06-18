import Image from "next/image";
import st from "./detail.module.scss";

export default function Detail() {
  return (
    <div className={st.container}>
      <div className={st.background}>
        <Image
          className={st.bgImage}
          height={1000}
          width={1000}
          alt=""
          src="/images/detail/hinkalina.jpeg"
        />
      </div>

      <div className={st.ImageTitle}>
        <Image height={200} width={200} alt="" src="/images/detail/bao.png" />
      </div>

      <div className={st.controls}>
        <button className={st.playButton}>
          <Image
            height={200}
            width={200}
            alt=""
            src="/images/play-icon-black.png"
          />
          <span>PLAY</span>
        </button>

        <button className={st.TrailerButton}>
          <Image
            height={200}
            width={200}
            alt=""
            src="/images/play-icon-white.png"
          />
          <span>Trailer</span>
        </button>

        <button className={st.addButton}>
          <span>+</span>
        </button>

        <div className={st.groupWatchButton}>
          <Image height={200} width={200} alt="" src="/images/group-icon.png" />
        </div>
      </div>

      <div className={st.subtitle}>
        2018 • 7m • Family, Fantasy, Kids, Animation
      </div>

      <div className={st.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam
        accusamus iure vero optio debitis dolor id quidem esse tempore veritatis
        minima rerum unde veniam explicabo, omnis quasi rem. Eaque!
      </div>
    </div>
  );
}
