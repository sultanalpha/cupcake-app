import CustomAppBar from "@/component/appbar/CustomAppBar";
import ScrollXDisplay from "@/component/display/ScrollX/ScrollXDisplay";
import "./app.css";
import CategoryDisplay from "@/component/display/Category/CategoryDisplay";
import categoryData from "@/data/categoryData";
import CustomOffer from "@/component/display/CustomOffer";
import bouquetsData from "@/data/bouquetsData";
import Divider from "@mui/material/Divider";
import SpecialDisplay from "@/component/display/Special/SpecialDisplay";
import { EmblaOptionsType } from "embla-carousel";
import GridDisplay from "@/component/display/Grid/GridDisplay";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function App() {
  return (
    <>
      <CustomAppBar />
      <CategoryDisplay label="Categories" categories={categoryData} />
      <Divider variant="middle" />
      <ScrollXDisplay label="Featured flowers" flowers={bouquetsData} />
      <Divider variant="middle" />
      <CustomOffer flower={bouquetsData[2]} />
      <Divider variant="middle" />
      <SpecialDisplay slides={SLIDES} options={OPTIONS} bgUrl="/assets/images/backgrounds/a-bouquet-of-flowers-on-a-wooden-floor-photo.jpeg" flower={bouquetsData[5]} />

      <ScrollXDisplay label="Hot bouquets" flowers={bouquetsData} />
      <Divider variant="middle" />
      <GridDisplay label="Latest bouquets" flowers={bouquetsData} />
      <Divider variant="middle" />
    </>
  );
}
