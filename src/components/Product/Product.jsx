import React from "react";
import styles from "./Product.module.css";


const Product = ({title, price, imageUrl}) =>{
    return(
            <div className={styles.productWrapper}>
                <div className={styles.photo}>
                    <img className={styles.katalog} src={imageUrl}/>
                </div>
                <div className={styles.items}>{title}</div>
                <div className={styles.price}>{price}</div>
            </div>
    )
};

export default Product;