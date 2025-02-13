/* eslint-disable react/prop-types */
import "./CustomButton.scss";

const CustomButton = ({
  title = "Download",
  type = "green",
  paddingX,
  paddingY,
  onClick,
  width,
  className = "",
  ...props
}) => {
  const buttonClasses = ["button", `button--${type}`, className];
  const customStyle = {};

  if (paddingX || paddingY) {
    customStyle.padding = `${paddingY || "14px"} ${paddingX || "40px"}`;
  }

  if (width) {
    customStyle.width = width || '272px';
  }

  return (
    <button
      className={buttonClasses.join(" ")}
      onClick={onClick}
      style={customStyle}
      {...props}
    >
      {title}
    </button>
  );
};

export default CustomButton;
