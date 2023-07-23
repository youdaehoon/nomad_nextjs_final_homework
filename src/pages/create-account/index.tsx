import { cls } from "@/libs/utils";
import Link from "next/link";
import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface CreateAccountFrom {
  email: string;
  name: string;
  password: string;
  year: number;
  month: number;
  date: number;
}
const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateAccountFrom>();
  const regMail = new RegExp(`^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$`);

  const onValid: SubmitHandler<CreateAccountFrom> = async (e) => {
    const res = await fetch("/api/user/create-account", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.name,
        password: e.password,
        email: e.email,
        birthDate: e.year + "-" + e.month + "-" + e.date,
      }),
    });
    if (res.status === 201) {
      alert("you have account");
    }
    if (res.status === 200) {
      alert("account created");
    }
  };
  const onError: SubmitErrorHandler<CreateAccountFrom> = (e) => {};
  return (
    <div className="bg-indigo-500 w-full h-full p-4 flex items-center justify-center">
      <div className="w-full h-full justify-center max-w-lg  bg-zinc-700 text-white p-6 flex flex-col items-center rounded-md">
        <div className="w-full h-full">
          <h1 className="text-center font-semibold text-lg">계정 만들기</h1>
          <form onSubmit={handleSubmit(onValid, onError)}>
            <div className="space-y-5">
              <div className="flex flex-col space-y-2">
                <label
                  className="select-none text-xs font-extralight text-zinc-300 space-x-1"
                  htmlFor="email"
                >
                  <span>이메일</span>
                  <span className="text-red-600">*{errors.email?.message}</span>
                </label>
                <input
                  className={cls(
                    "bg-zinc-800 py-1 px-2 rounded-sm font-light focus:ring-blue-400 focus:ring-offset-0  focus:ring-2 focus:border-none focus:outline-none"
                  )}
                  id="email"
                  {...register("email", {
                    required: "이메일을 입력해주세요.",
                    validate: {
                      pattern: (e) =>
                        regMail.test(e) || "email형식이 맞지않습니다.",
                    },
                  })}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  className="select-none text-xs font-extralight text-zinc-300 space-x-1"
                  htmlFor="name"
                >
                  <span>이름</span>
                  <span className="text-red-600">*{errors.name?.message}</span>
                </label>
                <input
                  className={cls(
                    "bg-zinc-800 py-1 px-2 rounded-sm font-light focus:ring-blue-400 focus:ring-offset-0  focus:ring-2 focus:border-none focus:outline-none"
                  )}
                  id="name"
                  {...register("name", {
                    required: "이름을 입력해주세요.",
                  })}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  className="select-none text-xs font-extralight text-zinc-300 space-x-1"
                  htmlFor="password"
                >
                  비밀번호
                  <span className="text-red-600">
                    *{errors.password?.message}
                  </span>
                </label>
                <input
                  className="bg-zinc-800 py-1 px-2 rounded-sm font-light focus:ring-blue-400 focus:ring-offset-0  focus:ring-2 focus:border-none focus:outline-none"
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "비밀번호를 입력해주세요",
                  })}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="select-none text-xs font-extralight text-zinc-300 space-x-1">
                  생년월일
                  <span className="text-red-600">
                    *
                    {errors.year?.message ||
                      errors.month?.message ||
                      errors.date?.message}
                  </span>
                </label>
                <div className="grid grid-cols-7 space-x-2">
                  <select
                    className="bg-zinc-800 col-span-2"
                    {...register("year", {
                      required: "년도를 입력해주세요.",
                      validate: {
                        nullCheck: (e) => +e !== 0 || "년도를 입력해주세요.",
                      },
                    })}
                  >
                    <option value={0}>년</option>
                    {new Array(100).fill(0).map((_, idx) => {
                      const year = 2020 - idx;
                      return (
                        <option key={"year" + idx} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="bg-zinc-800 col-span-3"
                    {...register("month", {
                      required: "월을 입력해주세요.",
                      validate: {
                        nullCheck: (e) => +e !== 0 || "월을 입력해주세요.",
                      },
                    })}
                  >
                    <option value={0}>월</option>
                    {new Array(12).fill(0).map((_, idx) => {
                      const month = idx + 1;
                      return (
                        <option key={"year" + idx} value={month}>
                          {month}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="bg-zinc-800 col-span-2"
                    {...register("date", {
                      required: "일을 입력해주세요.",
                      validate: {
                        nullCheck: (e) => +e !== 0 || "일을 입력해주세요.",
                      },
                    })}
                  >
                    <option value={0}>일</option>
                    {new Array(30).fill(0).map((_, idx) => {
                      const date = idx + 1;
                      return (
                        <option key={"date" + idx} value={date}>
                          {date}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <button
              className="flex w-full mt-10 items-center justify-center bg-indigo-500 py-2 text-sm rounded-sm hover:bg-indigo-600"
              type="submit"
            >
              계속하기
            </button>
          </form>
          <div className="mt-10">
            <Link href={"/log-in"}>
              <span className="text-sky-400 text-sm">
                이미 계정이 있으신가요?
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
