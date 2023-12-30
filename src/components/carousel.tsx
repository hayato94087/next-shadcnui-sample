"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FC } from "react";
import Autoplay from "embla-carousel-autoplay";

export const Carousel1: FC = () => (
  <Carousel className="w-full max-w-xs">
    <CarouselContent>
      {Array.from({ length: 10 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="flex flex-row aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export const Carousel2: FC = () => (
  <Carousel
    opts={{
      align: "start",
    }}
    className="w-full max-w-sm"
  >
    <CarouselContent>
      {Array.from({ length: 10 }).map((_, index) => (
        // basisを調整することで表示する数を変更できる。basis-1/2の場合は2つ表示
        <CarouselItem key={index} className="basis-1/2">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export const Carousel3: FC = () => (
  <Carousel
    opts={{
      align: "start",
    }}
    className="w-full max-w-sm"
  >
    <CarouselContent>
      {Array.from({ length: 10 }).map((_, index) => (
        // basisを調整することで表示する数を変更できる。basis-1/3の場合は3つ表示
        <CarouselItem key={index} className="basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export const Carousel4: FC = () => (
  <Carousel
    opts={{
      align: "start",
      // loopで最後のスライドまで行ったら最初のスライドに戻るようになる。
      loop: true,
    }}
    className="w-full max-w-sm"
  >
    <CarouselContent>
      {Array.from({ length: 10 }).map((_, index) => (
        // basisを調整することで表示する数を変更できる。basis-1/3の場合は3つ表示
        <CarouselItem key={index} className="basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export const Carousel5: FC = () => (
  <Carousel
    opts={{
      align: "start",
      // loopで最後のスライドまで行ったら最初のスライドに戻るようになる。
      loop: true,
    }}
    plugins={[
      // Autoplayで自動的にスライドを切り替えることができる。
      Autoplay({
        delay: 2000,
      }),
    ]}
    className="w-full max-w-sm"
  >
    <CarouselContent>
      {Array.from({ length: 10 }).map((_, index) => (
        // basisを調整することで表示する数を変更できる。
        // basis-1/2の場合は2つ表示、basis-1/3の場合は3つ表示
        <CarouselItem key={index} className="basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export const Carousel6: FC = () => (
  <Carousel
    opts={{
      align: "start",
    }}
    className="w-full max-w-sm"
  >
    <CarouselContent>
      {Array.from({ length: 10 }).map((_, index) => (
        // basisを調整することで表示する数を変更できる。
        // デフォルトbasis-1/2の場合は2つ表示、mdの場合はbasis-1/4の場合は4つ表示
        <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export const Carousel7: FC = () => (
  <Carousel
    opts={{
      align: "start",
    }}
    orientation="vertical"
    className="w-full max-w-xs"
  >
    <CarouselContent className="-mt-1 h-[200px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="pt-1 basis-1/2">
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);
