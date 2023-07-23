import { cls } from "@/libs/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

interface LogInForm {
  email: string;
  password: string;
}
const LogIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LogInForm>();
  const regMail = new RegExp(`^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$`);

  const onValid: SubmitHandler<LogInForm> = async (e) => {
    const res = await fetch("/api/user/log-in", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.email,
        password: e.password,
      }),
    });
    if (res.status === 404) {
      alert("회원정보 불일치");
    }
    if (res.status === 200) {
      alert("로그인성공");
      router.push("/");
    }
  };
  const onError: SubmitErrorHandler<LogInForm> = (e) => {};
  return (
    <div className="w-full h-full flex items-center justify-center md:px-2 md:bg-indigo-500">
      <div className="w-full h-full md:h-fit justify-center lg:w-[1300px] bg-zinc-700 text-white p-6 flex flex-col items-center rounded-md">
        <h2 className="font-semibold text-xl">돌아오신 것을 환영해요!</h2>
        <h3 className="text-xs font-thin text-zinc-400 mt-2">
          다시 만나다니 너무 반가워요!
        </h3>
        <form onSubmit={handleSubmit(onValid, onError)} className="mt-5 w-full">
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
          </div>

          <button
            className="flex w-full mt-10 items-center justify-center bg-indigo-500 py-2 text-sm rounded-sm hover:bg-indigo-600"
            type="submit"
          >
            로그인
          </button>
          <div className="mt-2">
            <div className="text-sm font-thin text-zinc-400 space-x-1">
              <span className="select-none">계정이 필요한가요?</span>
              <Link href={"/create-account"}>
                <span className="text-sky-400">가입하기</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
