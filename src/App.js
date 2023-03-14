import './App.css';
import Header from "./components/Header/Header";
import Catalog from "./components/Katalog/Catalog";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Home";

function App() {
    let [items, setItems] = React.useState([])
    React.useEffect(()=>{
        fetch('https://63e3711065ae4931770efccc.mockapi.io/DATA')
            .then(res=>res.json())
            .then((arr)=> {
                setItems(arr);
                console.log(arr);
            });
    }, [])
    const search = useSelector((state)=>state.search.search)
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/*" element={<HomePage />} />
                <Route path="/catalog" element={<Catalog items={items} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
    );
}

export default App;
