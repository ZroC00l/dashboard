import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  icon,
  text,
  width,
  color,
  bgColor,
  bgHoverColor,
  size,
  borderRadius,
}) => {
  const { initialState, setIsClicked } = useStateContext();

  return (
    <button
      type="button"
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      onClick={() => setIsClicked(initialState)}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
