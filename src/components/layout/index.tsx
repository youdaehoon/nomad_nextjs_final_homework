import React from "react";

interface IProps {
  children: React.ReactNode;
}
const Rayout = ({ children }: IProps) => {
  return <div className="w-screen h-screen">{children}</div>;
};

export default Rayout;
