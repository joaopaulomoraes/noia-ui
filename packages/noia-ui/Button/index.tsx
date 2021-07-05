import React from "react";

type ButtonProps = {
  color: string;
  children: React.ReactNode;
};

const Button = ({ color, children }: ButtonProps) => {
  return <button style={{ backgroundColor: color }}>{children}</button>;
};
