import Image from "next/image";
import style from "./Movies.module.scss";

function Movies() {
  return (
    <div>
      <h4>Recommended for you</h4>
      <div className={style.content}>
        <div className={style.wrap}>
          <Image height={500} width={500} src="/images/simps.jpeg" alt="" />
        </div>
        <div className={style.wrap}>
          <Image height={500} width={500} src="/images/simps.jpeg" alt="" />
        </div>
        <div className={style.wrap}>
          <Image height={500} width={500} src="/images/simps.jpeg" alt="" />
        </div>
        <div className={style.wrap}>
          <Image height={500} width={500} src="/images/simps.jpeg" alt="" />
        </div>
        <div className={style.wrap}>
          <Image height={500} width={500} src="/images/simps.jpeg" alt="" />
        </div>
        <div className={style.wrap}>
          <Image height={500} width={500} src="/images/simps.jpeg" alt="" />
        </div>
        <div className={style.wrap}>
          <Image height={500} width={500} src="/images/simps.jpeg" alt="" />
        </div>
        <div className={style.wrap}>
          <Image height={500} width={500} src="/images/simps.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Movies;
