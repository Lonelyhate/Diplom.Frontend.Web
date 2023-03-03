import React, { FC, useState, useEffect } from "react";
import "./InputMain.scss";
import { BsCheck } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

interface IInputMain {
  labelText?: string;
  placeholder: string;
  marginRight?: number;
  value?: string;
  setValue: (e: any) => void;
  svgCheckCancel?: string;
  functionCancel?: () => void;
  marginTop?: number;
}

const InputMain: FC<IInputMain> = ({
  labelText,
  placeholder,
  marginRight,
  value = "",
  setValue,
  svgCheckCancel,
  functionCancel,
  marginTop
}) => {
  const onChangeListener = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const test = () => {
    setValue("")
    functionCancel && functionCancel()
  }

  return (
    <div className='input-main' style={{ marginRight: marginRight, marginTop }}>
      {labelText &&  <label htmlFor='input-firstname' className='input-main__label'>
        <p className='input-main__label-text'>{labelText}</p>
        {svgCheckCancel && value && (
            <BsCheck
                size={20}
                color='rgb(5, 189, 5)'
                className='input-main__check-svg'
            />
        )}
      </label>}
      <div className='input-main__input-field'>
        <input
          value={value}
          onChange={(e) => onChangeListener(e)}
          id='input-firstname'
          placeholder={placeholder}
          type='text'
          className='input-main__input'
        />
        {/* {svgCheckCancel && value && (
          <MdCancel onClick={test} size={20} className='input-main__close' />
        )} */}
      </div>
    </div>
  );
};

export default InputMain;
function dispacth(arg0: any) {
  throw new Error("Function not implemented.");
}
