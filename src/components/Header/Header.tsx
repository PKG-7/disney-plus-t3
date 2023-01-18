import Image from "next/image";
import style from "./Header.module.scss";

// TODO:
// Поменять ссылки <a href=""> на настоящие

export default function Header() {
  return (
    <nav className={style.nav}>
      <Image
        width={20}
        height={20}
        className={style.logo}
        src="/images/logo.svg"
        alt="logo"
      />
      <div className={style.navMenu}>
        <a>
          <Image width={20} height={20} src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <Image width={20} height={20} src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a>
          <Image
            width={20}
            height={20}
            src="/images/watchlist-icon.svg"
            alt=""
          />
          <span>WATCHLIST</span>
        </a>
        <a>
          <Image
            width={20}
            height={20}
            src="/images/original-icon.svg"
            alt=""
          />
          <span>ORIGINALS</span>
        </a>
        <a>
          <Image width={20} height={20} src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a>
          <Image width={20} height={20} src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </div>
      <Image
        width={20}
        height={20}
        alt="user"
        className={style.userImg}
        src="/images/user-image.png"
      />
    </nav>
  );
}
