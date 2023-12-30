import {
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Carousel5,
  Carousel6,
  Carousel7,
} from "@/components/carousel";
import { FC } from "react";

const CarouselPage: FC = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-200">
      <div className="flex flex-col items-center justify-items-center space-y-20">
        <div className="flex flex-col space-y-3">
          <span className="text-sm font-bold self-center">
            表示数:1, ループ:あり, 表示方向:横, オートプレイ:なし
          </span>
          <Carousel1 />
        </div>
        <div className="flex flex-col space-y-3">
          <span className="text-sm font-bold self-center">
            表示数:2, ループ:なし, 表示方向:横, オートプレイ:なし
          </span>
          <Carousel2 />
        </div>
        <div className="flex flex-col space-y-3">
          <span className="text-sm font-bold self-center">
            表示数:3, ループ:なし, 表示方向:横, オートプレイ:なし
          </span>
          <Carousel3 />
        </div>
        <div className="flex flex-col space-y-3">
          <span className="text-sm font-bold self-center">
            表示数:3, ループ:あり, 表示方向:横, オートプレイ:なし
          </span>
          <Carousel4 />
        </div>
        <div className="flex flex-col space-y-3">
          <span className="text-sm font-bold self-center">
            表示数:3, ループ:あり, 表示方向:横, オートプレイ:あり
          </span>
          <Carousel5 />
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <span className="text-sm font-bold self-center">
            表示数:レスポンシブ, ループ:なし, 表示方向:横, オートプレイ:なし
          </span>
          <Carousel6 />
        </div>
        <div className="flex flex-col space-y-16">
          <span className="text-sm font-bold self-center">
            表示数:2, ループ:なし, 表示方向:縦, オートプレイ:なし
          </span>
          <Carousel7 />
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
