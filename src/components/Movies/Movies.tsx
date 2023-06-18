import Image from "next/image";
import st from "./Movies.module.scss";
import { type iMoviesData } from "../../../AppData/movies";

export default function Movies({ moviesData }: { moviesData: iMoviesData[] }) {
  return (
    <>
      <h4 className={st.title}>Recommended for you</h4>
      <div className={st.content}>
        {moviesData.map((movie) => {
          return (
            <div key={movie.id} className={st.wrap}>
              <Image
                height={500}
                width={500}
                src={movie.image}
                alt={movie.altTag}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
