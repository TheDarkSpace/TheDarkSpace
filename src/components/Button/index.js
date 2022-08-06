import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder9: "rounded-radius9",
  RoundedBorder19: "rounded-radius19615",
  RoundedBorder4: "rounded-radius4",
  RoundedBorder15: "rounded-radius15",
};
const variants = {
  FillBluegray100: "bg-bluegray_100 text-white_A700",
  OutlineGray900: "outline outline-[0.5px] outline-gray_900 text-gray_900",
  GradientBluegray700Black900: "bg-gradient  text-white_A700",
  FillBlack90019: "bg-black_900_19 text-black_900",
  FillWhiteA700: "bg-white_A700 text-black_900",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "3xl:p-[10px] lg:p-[7px] xl:p-[8px] p-[9px]",
  lg: "lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px]",
  xl: "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder9",
    "RoundedBorder19",
    "RoundedBorder4",
    "RoundedBorder15",
  ]),
  variant: PropTypes.oneOf([
    "FillBluegray100",
    "OutlineGray900",
    "GradientBluegray700Black900",
    "FillBlack90019",
    "FillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder9",
  variant: "FillBluegray100",
  size: "xl",
};

export { Button };
