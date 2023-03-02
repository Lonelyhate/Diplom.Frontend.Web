import React, { FC } from "react";
import "./AuthInput.scss";
import cn from "classnames";
import { useAppSelector } from "../../../hooks/redux";

interface IAuthInput {
  placeholder?: string;
  type?: "text" | "password";
  marginTop?: string;
  marginBottom?: string;
  value?: string;
  setValue?: (e: any) => void;
  validation?: boolean;
}

const AuthInput: FC<IAuthInput> = ({
  placeholder,
  type = "text",
  marginBottom,
  value,
  setValue,
  marginTop,
  validation = false
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue && setValue(e.target.value);
  };

  return (
    <input
      value={value}
      onChange={(e) => onChange(e)}
      className={cn("auth-input input", {
        error: validation
      })}
      type={type}
      placeholder={placeholder}
      style={{ marginBottom: marginBottom, marginTop: marginTop }}
    />
  );
};

export default AuthInput;
