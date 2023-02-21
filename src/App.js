import './App.css';
import Header from "./components/Header/Header";
import Catalog from "./components/Katalog/Catalog";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

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
                <Route path="/*" element={<Catalog items={items} />} />
            </Routes>
        </div>
    );
}

export default App;
