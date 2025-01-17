import React from "react";

interface Props {
  name: string;
  icon: JSX.Element;
}

const LoginBtn: React.FC<Props> = ({ name, icon }) => {
  const handleClick = () => {
    window.location.href =
      "/auth/" + name.toLowerCase() + "?redirect_path=/";
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="mt-[20px] h-[31.24px] w-[245px] rounded-[50px] border-[1px] border-solid border-black bg-white lg:mt-[25px] lg:h-[51px] lg:w-[400px]"
      >
        <div className="float-left ml-[5%]	inline-block pt-1 lg:text-[30px]">
          {icon}
        </div>
        <div className="inline-block text-sm lg:pt-2">{name}</div>
      </button>
    </div>
  );
};

export default LoginBtn;
