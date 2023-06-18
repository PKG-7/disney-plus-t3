import Image from "next/image";
import style from "./Header.module.scss";
import Link from "next/link";

// TODO: Поменять ссылки на реальные страницы, ага))

export default function Header() {
  return (
    <nav className={style.nav}>
      {/* Disney Logo */}
      <Link href="/">
        <Image
          width={20}
          height={20}
          className={style.logo}
          src="/images/logo.svg"
          alt="logo"
        />
      </Link>

      {/* Menu */}
      <div className={style.navMenu}>
        <Link href="/">
          <Image width={20} height={20} src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </Link>

        <Link href="/">
          <Image width={20} height={20} src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </Link>

        <Link href="/">
          <Image
            width={20}
            height={20}
            src="/images/watchlist-icon.svg"
            alt=""
          />
          <span>WATCHLIST</span>
        </Link>

        <Link href="/">
          <Image
            width={20}
            height={20}
            src="/images/original-icon.svg"
            alt=""
          />
          <span>ORIGINALS</span>
        </Link>

        <Link href="/">
          <Image width={20} height={20} src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </Link>

        <Link href="/">
          <Image width={20} height={20} src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </Link>
      </div>

      {/* UserProfile */}
      <Link href="/login">
        <Image
          width={20}
          height={20}
          alt="user"
          className={style.userImg}
          src="/images/user-image.png"
        />
      </Link>
    </nav>
  );
}
