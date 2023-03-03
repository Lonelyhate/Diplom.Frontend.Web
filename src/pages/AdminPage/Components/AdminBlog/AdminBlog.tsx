import React, {FC, useState} from 'react';
import "./AdminBlog.scss"
import AsideAdmin from "../AsideAdmin/AsideAdmin";
import TitleMain from "../../../../UI/TitleMain/TitleMain";
import ButtonMain from "../../../../UI/ButtonMain/ButtonMain";
import AddBlog from "../AddBlog/AddBlog";

const AdminBlog: FC = () => {
    const [activeAddBlog, setActiveBlog] = useState<boolean>(false);


    return (
        <div className="admin-blog">
            <div className="admin-blog__container container">
                <AsideAdmin/>
                <div className="admin-blog__content">
                    <TitleMain text="Блог" location="center" />
                    <div className="admin-blog__header">
                        <p className="admin-blog__sort">Сортировка</p>
                        <ButtonMain width={120} text={"Добавить"} onClick={() => {setActiveBlog(true)}} />
                    </div>
                </div>
            </div>
            <AddBlog active={activeAddBlog} setActive={setActiveBlog} />
        </div>
    );
};

export default AdminBlog;