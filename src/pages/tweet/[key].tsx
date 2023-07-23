import SideInfo from "@/components/main/SideInfo";
import { Tweet } from "@/components/main/TweetList";
import { formatTweet } from "@/libs/utils";
import { NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useSWR from "swr";

interface TweetInput {
  content: string;
}
interface IPops {
  key: string;
}
const TweetDetail = ({ key }: IPops) => {
  const getDetail = async () => {
    const res = await fetch("/api/tweet/detail", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tweetId: key,
      }),
    });
    const json = await res.json();
    return json;
  };
  const { data, mutate } = useSWR("api/tweet/detail", getDetail);
  const router = useRouter();

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
    {
      id: 3,
      url: "",
      name: "유대훈",
      date: "2023.07.04 오후 7:26",
      content: `마치개님은 헬스 다니시나요~? 요즘 운동 꾸준히 하시는 모습 보기
            좋습니다! 오늘도 파이팅이에요🉑`,
      like: 0,
    },
    {
      id: 4,
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
  const handleClick = async () => {
    const res = await fetch("/api/tweet/fav", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tweetId: router.query.key,
      }),
    });
    mutate();
  };
  return (
    <div className="w-full h-full bg-zinc-700 flex text-white">
      <div className="h-full p-5 bg-zinc-900">
        <Link href={"/"}>
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full group">
            <svg
              style={{ color: "rgb(29, 155, 240);" }}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-discord group-hover:-translate-y-1 transition-transform"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                fill="#1d9bf0"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
      <SideInfo />
      <div className="flex-1 py-12 flex flex-col justify-between ">
        <div className="flex flex-col h-[1500px]">
          <div className="flex justify-between border-b border-gray-600 border-solid  px-4 pb-5">
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-400 w-20 h-20 rounded-full" />
              <span>{data.tweet.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-400">{data.tweet?.date}</span>

              <div
                onClick={handleClick}
                className="flex space-x-1 bg-zinc-800 w-fit p-1.5 rounded-lg group cursor-pointer"
              >
                <div className="group-hover:-translate-y-1 transition-transform">
                  👍
                </div>
                <div>{data.tweet?.like}</div>
              </div>
            </div>
          </div>

          <span className="py-10 px-5">{data.tweet?.content}</span>
        </div>

        <div className="relative flex-1  border-t border-gray-600 border-solid ">
          <div className="flex  flex-col h-[500px] overflow-y-auto">
            {datas.reverse().map((data, idx) => (
              <div
                key={data.id}
                className="flex py-5 space-x-4 w-full hover:bg-zinc-600 cursor-pointer px-2"
              >
                <div className="bg-indigo-400 w-9 h-9 rounded-full" />
                <div className="flex flex-col space-y-2 flex-1">
                  <div className="space-x-1 ">
                    <span className="font-medium">{data.name}</span>
                    <span className="text-xs text-gray-400">{data.date}</span>
                  </div>
                  <span>{data.content}</span>
                </div>
              </div>
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
      </div>
    </div>
  );
};

export default TweetDetail;

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context;
  const { key } = query;

  return { props: { key } };
};
