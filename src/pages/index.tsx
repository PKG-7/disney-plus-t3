import { type NextPage } from "next";
import { moviesData } from "../../AppData/movies";
import { sliderData } from "../../AppData/slider";
import { viewersData } from "../../AppData/vievers";
import LayoutHomePage from "../Layouts/LayoutHomePage";
import ImgSlider from "../components/ImgSlider/ImgSlider";
import Movies from "../components/Movies/Movies";
import Viewers from "../components/Viewers/Viewers";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <LayoutHomePage>
      <ImgSlider sliderData={sliderData} />
      <Viewers viewersData={viewersData} />
      <Movies moviesData={moviesData} />
    </LayoutHomePage>
  );
};

export default Home;
