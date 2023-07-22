import { formatTweet } from "@/libs/utils";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface TweetInput {
  content: string;
}
export interface Tweet {
  url: string;
  name: string;
  date: string;
  content: string;
  like: number;
  id: number;
}
const TweetList = () => {
  const [datas, setDatas] = useState<Tweet[]>([
    {
      id: 1,
      url: "",
      name: "유대훈",
      date: "2023.07.04 오후 7:26",
      content: `2023.07.04 화 [] 캐롯마켓 강의 [o] 코드 챌린지 [o] 운동 [o]
          알고리즘 [o] 캠블리 [] 테크인터뷰 준비 [o] 주간회고 작성 [o]
          오페라의 유령 보러가야디`,
      like: 2,
    },
    {
      id: 2,
      url: "",
      name: "유대훈",
      date: "2023.07.04 오후 7:26",
      content: `마치개님은 헬스 다니시나요~? 요즘 운동 꾸준히 하시는 모습 보기
          좋습니다! 오늘도 파이팅이에요🉑`,
      like: 0,
    },
  ]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TweetInput>();

  const onValid: SubmitHandler<TweetInput> = (e) => {
    console.log(e.content);
    setDatas((prev) => [
      ...prev,
      {
        id: 3,
        url: "",
        name: "유대훈",
        date: "2023.07.04 오후 7:26",
        content: e.content,
        like: 0,
      },
    ]);
    reset();
  };
  return (
    <div className="relative   flex-1">
      <div className="px-4 h-[calc(100%_-_65px)] flex flex-col  overflow-y-auto ">
        {datas.map((data, idx) => (
          <Link key={"tweet" + idx} href={`/tweet/${data.id}`}>
            <div className="flex py-5 space-x-4 w-full hover:bg-zinc-600 cursor-pointer select-none">
              <div className="bg-indigo-400 w-9 h-9 rounded-full" />
              <div className="flex flex-col space-y-2 flex-1">
                <div className="space-x-1 ">
                  <span className="font-medium">{data.name}</span>
                  <span className="text-xs text-gray-400">{data.date}</span>
                </div>
                <span>{formatTweet(data.content)}</span>

                <div
                  className="flex space-x-1 bg-zinc-800 w-fit p-1.5 rounded-lg group"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <div className="group-hover:-translate-y-1 transition-transform">
                    👍
                  </div>
                  <div>{data.like}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 pb-5 w-full px-4 bg-zinc-700">
        <form className="w-full shadow-lg" onSubmit={handleSubmit(onValid)}>
          <input
            {...register("content", { required: true })}
            className="w-full rounded-lg py-3 px-5 bg-zinc-800 text-gray-300 focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default TweetList;
