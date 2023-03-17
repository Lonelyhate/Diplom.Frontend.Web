import React, { useEffect } from 'react';
import './styles/global.scss';
import Header from './shared/Header/Header';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUserAuth } from './store/reducers/User/creators/UserCreator';
import Footer from './shared/Footer/Footer';
import RoutesComponent from './RoutesComponent';
import axios from 'axios';
import { fetchFavoritesAll } from './store/reducers/Product/Creators/FavoritesCreator';
import Modal from './UI/Modal/Modal';
import ModalContentProduct from './shared/ModalContentProduct/ModalContentProduct';
import { setModalProductVisable } from './store/reducers/Product/Creators/ProductCreator';
import { useLocation } from 'react-router-dom';

function App() {
    const dispatch = useAppDispatch();
    const { currentProductForModal, visableModalProduct } = useAppSelector(
        state => state.productReducer
    );
    const location = useLocation();

    const closeModalProduct = (value: boolean) => {
        dispatch(setModalProductVisable(value));
    };

    useEffect(() => {
        dispatch(fetchUserAuth());
        dispatch(fetchFavoritesAll());
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);

    const test = async () => {
        // await axios.delete('https://localhost:7081/api/Favorites/6', {
        //     headers: {
        //         Authorization: `bearer ${localStorage.getItem('token')}`
        //     }
        // });
    };

    return (
        <div className='App'>
            <Header />
            <main className='App__main'>
                <RoutesComponent />
            </main>
            <Footer />
            <Modal visable={visableModalProduct} setVisable={closeModalProduct}>
                {currentProductForModal && (
                    <ModalContentProduct product={currentProductForModal} />
                )}
            </Modal>
        </div>
    );
}

export default App;
