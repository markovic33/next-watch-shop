import { HeroImage } from "./HeroImage";
import Search from "./Search";

export default function HeroContainer() {
  return (
    <div className="flex justify-center  flex-col md:flex-row lg:flex-row items-center gap-3">
      <div className="">
        <Search />
      </div>
      <div className="">
        <HeroImage />
      </div>
    </div>
  );
}
