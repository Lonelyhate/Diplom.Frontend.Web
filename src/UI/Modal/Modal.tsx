import React, { FC, ReactNode, useEffect } from "react";
import "./Modal.scss";
import cn from "classnames";

interface IModal {
    visable: boolean;
    setVisable: (visable: boolean) => void;
    animationContent?: "downFrom";
    widthContent?: string | number;
    heightContent?: string | number;
    maxWidth?: string | number;
    minHeight?: string | number;
    padding?: string;
    borderRadius?: string | number;
}

const Modal: FC<IModal & { children?: ReactNode }> = ({
    setVisable,
    visable,
    children,
    animationContent = "downFrom",
    widthContent,
    heightContent,
    maxWidth,
    minHeight,
    padding,
    borderRadius
}) => {
    useEffect(() => {
        const handleScrollOf = () => {
            if (visable) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        };
        handleScrollOf();

        return handleScrollOf();
    }, [visable]);

    return (
        <div
            onClick={() => setVisable(false)}
            className={cn("modal", {
                active: visable
            })}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: widthContent,
                    height: heightContent,
                    minHeight,
                    maxWidth,
                    padding,
                    borderRadius
                }}
                className={cn("modal__content", {
                    down: animationContent == "downFrom",
                    active: visable
                })}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
