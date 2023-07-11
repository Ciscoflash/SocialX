import React from "react";

// this is our button component that would be used across board

export const Button = ({ text, btnClass, href }) => {
  return (
    <a href={href} className={`btn ${btnClass}`}>
      {text}
    </a>
  );
};
