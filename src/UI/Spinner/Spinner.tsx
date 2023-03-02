import React, {FC} from 'react';
import "./Spinner.scss";

interface ISpinner
{
    size?: number
    color?: string
    widthBorder?: number
    width?: string;
}

const Spinner: FC<ISpinner> = ({size = 48, color = "#FFF", widthBorder = 5}) => {
    return (
        <span style={{width: size, height: size, borderStyle: "solid", borderWidth: widthBorder, borderColor: color, borderBottomColor: "transparent"}} className="loader"></span>
    );
};

export default Spinner;