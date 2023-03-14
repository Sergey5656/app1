import React from "react";
import styles from './Header.module.css'
import searchIcon from '../../assets/img/search.png'
import closeIcon from '../../assets/img/close.png'
import homeIcon from '../../assets/img/home.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../../slices/searchSlice/searchSlice";
import {nowTittle, selectedTittle} from "../../slices/categorySlice/tittleSlice";


const Header = () => {


    const dispatch = useDispatch()
    const tittle = useSelector((state) => state.tittle.tittle)
    const search = useSelector((state) => state.search.search)
    let activeStyle = {
        textDecoration: "none",
        fontSize: "25px",
    };

    return (

        <div className={styles.fon}>
            {search}
            {tittle}
            <div className={styles.item}>
                <div className={styles.itemHome}>
                    <img className={styles.home} src={homeIcon}/>
                    <img className={styles.searchIcon} src={searchIcon}/>
                    <input className={styles.input}
                           onChange={(e)=> {
                           dispatch(setSearch(e.target.value))}
                           }
                           placeholder="Название товара"/>
                    <img className={styles.closeIcon} src={closeIcon}/>
                </div>
            </div>
            <div className={styles.menuContainer}>
                <nav className={styles.nav}>
                    <NavLink to="leganky" onClick={()=> dispatch(nowTittle())} style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Лежанки
                    </NavLink>
                    <NavLink  to={'/kogtetochky'} style={({ isActive }) =>
                        isActive ? activeStyle : undefined }>Когтеточки</NavLink>
                    <NavLink to={'/perenosky'} style={({ isActive }) =>
                        isActive ? activeStyle : undefined}>Переноски</NavLink>
                    <NavLink to={'/klerky-volery'} style={({ isActive }) =>
                        isActive ? activeStyle : undefined}>Клетки-вольеры</NavLink>
                </nav>
            </div>

        </div>
    )
};

export default Header