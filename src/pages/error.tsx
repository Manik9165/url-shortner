import React from "react";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <p className="text-md text-red-600">{message}</p>;
};

export default Error;
