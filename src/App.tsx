import React, { useEffect } from "react";
import "./styles/global.scss";
import Header from "./shared/Header/Header";
import { useAppDispatch } from "./hooks/redux";
import { fetchUserAuth } from "./store/reducers/User/ActionCreator";
import Footer from "./shared/Footer/Footer";
import RoutesComponent from "./RoutesComponent";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserAuth());
  }, []);

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
