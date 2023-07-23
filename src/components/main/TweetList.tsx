import { formatTweet } from "@/libs/utils";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useSWR from "swr";

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
interface IProps {
  datas: Tweet[];
}
const TweetList = ({ datas }: IProps) => {
  const { data, mutate } = useSWR("api/tweet/get");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TweetInput>();

  const onValid: SubmitHandler<TweetInput> = async (e) => {
    const res = await fetch("api/tweet/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: e.content,
      }),
    });
    if (res.status === 200) {
      reset();
      mutate();
    }
    if (res.status === 404) {
      alert("실패");
    }
  };

  const handleClick = async (tweetId: number) => {
    const res = await fetch("/api/tweet/fav", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tweetId,
      }),
    });
    mutate();
  };
  return (
    <div className="relative   flex-1">
      <div className="px-4 h-[calc(100%_-_65px)] flex flex-col  overflow-y-auto ">
        {datas?.map((data, idx) => (
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
                    handleClick(data.id);
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
