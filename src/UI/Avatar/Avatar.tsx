import React, {FC} from 'react';
import "./Avatar.scss";
import {useAppSelector} from "../../hooks/redux";
import {FaUser} from "react-icons/fa"

interface IAvatar {
    size?: number
}

const Avatar: FC<IAvatar> = ({size = 50}) => {
    const {currentUser} = useAppSelector(state => state.userReducer)

    const sizeSvg = (size / 100) * 40;
    return (
        <div style={{width: size, height: size}} className={"avatar"}>
            {!currentUser?.avatar && <FaUser size={sizeSvg} />}
        </div>
    );
};

export default Avatar;