import { HomeSection1 } from "@/components/contents/home/HomeSection1";
import { HomeSection2 } from "@/components/contents/home/HomeSection2";
import { HomeSection3 } from "@/components/contents/home/HomeSection3";
import { HomeSection4 } from "@/components/contents/home/HomeSection4";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
    </div>
  );
}
