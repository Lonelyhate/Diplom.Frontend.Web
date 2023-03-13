import React, { useEffect } from "react";
import "./styles/global.scss";
import Header from "./shared/Header/Header";
import { useAppDispatch } from "./hooks/redux";
import { fetchUserAuth } from "./store/reducers/User/ActionCreator";
import Footer from "./shared/Footer/Footer";
import RoutesComponent from "./RoutesComponent";
import axios from "axios";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserAuth());
        test();
    }, []);

    const test = async () => {
        await axios.delete(
            "https://localhost:7081/api/Favorites/6",
            {
                headers: {
                    Authorization: `bearer ${localStorage.getItem("token")}`
                }
            }
        );
    };

    return (
        <div className='App'>
            <Header />
            <main className='App__main'>
                <RoutesComponent />
            </main>
            <Footer />
        </div>
    );
}

export default App;
