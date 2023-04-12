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
import { fetchOrdersByUser } from './store/reducers/Cart/Creators/OrderCreator';
import { fetchDiscountCreate, fetchDiscountDelete, fetchDiscountGetById } from './store/reducers/User/creators/DiscountCreator';
import { fetchBrandsAll } from './store/reducers/Product/Creators/BrandCreator';
import { fetchCategoriesAll } from './store/reducers/Product/Creators/CategoryCreator';

function App() {
    const dispatch = useAppDispatch();
    const { currentProductForModal, visableModalProduct } = useAppSelector(state => state.productReducer);
    const { currentUser, isAuth } = useAppSelector(state => state.userReducer);
    const { discount } = useAppSelector(state => state.discountReducer);
    const location = useLocation();

    const closeModalProduct = (value: boolean) => {
        dispatch(setModalProductVisable(value));
    };

    useEffect(() => {
        dispatch(fetchUserAuth());
        dispatch(fetchBrandsAll());
        dispatch(fetchFavoritesAll());
        dispatch(fetchOrdersByUser());
        dispatch(fetchDiscountCreate());
        dispatch(fetchCategoriesAll());
    }, []);

    useEffect(() => {
        if (isAuth && currentUser != null && discount == null) {
            dispatch(fetchDiscountCreate());
        } else {
            dispatch(fetchDiscountDelete());
        }
    }, [currentUser]);

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
                {currentProductForModal && <ModalContentProduct product={currentProductForModal} />}
            </Modal>
        </div>
    );
}

export default App;
