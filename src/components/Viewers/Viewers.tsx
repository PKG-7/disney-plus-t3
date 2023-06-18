import Image from "next/image";
import style from "./Viewers.module.scss";
import { type iViewers } from "../../../AppData/vievers";
import Link from "next/link";

export default function Viewers({ viewersData }: { viewersData: iViewers[] }) {
  return (
    <div className={style.container}>
      {viewersData.map((viewer) => (
        <div key={viewer.id} className={style.wrap}>
          <Link href={`/${viewer.pageLink}`}>
            <Image
              width={300}
              height={300}
              src={viewer.image}
              alt={viewer.altTag}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
