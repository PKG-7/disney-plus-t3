import Image from "next/image";
import style from "./Viewers.module.scss";

function Viewers() {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <Image
          width={300}
          height={300}
          src="/images/viewers-disney.png"
          alt=""
        />
      </div>
      <div className={style.wrap}>
        <Image
          width={300}
          height={300}
          src="/images/viewers-pixar.png"
          alt=""
        />
      </div>
      <div className={style.wrap}>
        <Image
          width={300}
          height={300}
          src="/images/viewers-marvel.png"
          alt=""
        />
      </div>
      <div className={style.wrap}>
        <Image
          width={300}
          height={300}
          src="/images/viewers-starwars.png"
          alt=""
        />
      </div>
      <div className={style.wrap}>
        <Image
          width={300}
          height={300}
          src="/images/viewers-national.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Viewers;
