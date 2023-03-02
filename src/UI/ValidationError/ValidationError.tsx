import React, {FC} from 'react';
import "./ValidationError.scss";

interface  IValidationError {
    text: string
}

const ValidationError: FC<IValidationError> = ({text}) => {
    return (
        <div className={"validation-error"}>
            <p className="validation-error__text">{text}</p>
        </div>
    );
};

export default ValidationError;