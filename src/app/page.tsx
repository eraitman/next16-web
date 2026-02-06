import { mainPageExperiment } from "@/flags";
import { HomeSection1 } from "@/components/contents/home/HomeSection1";
import { HomeSection2 } from "@/components/contents/home/HomeSection2";
import { HomeSection3 } from "@/components/contents/home/HomeSection3";
import { HomeSection4 } from "@/components/contents/home/HomeSection4";

export default async function Home() {
  const variant = await mainPageExperiment();

  // 현재는 모든 그룹이 동일한 화면을 보도록 설정 (대조군 기반)
  // 이후 variant === 'test' 조건으로 분기 가능
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
    </div>
  );
}
