import React from "react";

interface IProps {
  children: React.ReactNode;
}
const Rayout = ({ children }: IProps) => {
  return <div className="px-2">{children}</div>;
};

export default Rayout;
