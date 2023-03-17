import React, { FC } from "react";
import "./SizesTable.scss";
import { RxCross2 } from "react-icons/rx";
import { sizes } from "../../../../models/Models/Product/Sizes";

interface ISizesTable {
    closeVisable: (visable: false) => void
}

const SizesTable: FC<ISizesTable> = ({closeVisable}) => {
    return (
        <div className='sizes-table'>
            <div className='sizes-table__header'>
                <h3 className='sizes-table__title'>Таблица размеров</h3>
                <button onClick={() => closeVisable(false)} className='sizes-table__cancel'>
                    <RxCross2 size={25} />
                </button>
            </div>
            <div className='sizes-table__content'>
                <table className='sizes-table__table'>
                    <tbody className='sizes-table__tbody'>
                        <tr className='sizes-table__tr-header'>
                            <td className='sizes-table__td-header'>
                                <b>EU</b>
                            </td>
                            <td className='sizes-table__td-header'>
                                <b>RU</b>
                            </td>
                            <td className='sizes-table__td-header'>
                                <b>UK</b>
                            </td>
                            <td className='sizes-table__td-header'>
                                <b>US</b>
                            </td>
                            <td className='sizes-table__td-header'>
                                <b>JS</b>
                            </td>
                        </tr>
                        {sizes.map((item, index: number) => (
                            <tr key={index} className='sizes-table__tr-content'>
                                {Object.keys(item).map((sz, index: number) => (
                                    <td key={index} className='sizes-table__td-content'>
                                        <span>{(item as any)[sz]}</span>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SizesTable;
