import React from 'react'
import Image from "next/image"
import styles from "../styles/scss/section.module.scss"

interface Data {
    img: string,
    stock: number,
    sales:number,
    price:number,
    link:string,
    name:string
}

interface Prop{
    data:Data
}

const ProductCard = ({data}:Prop) => {
    const {img, name, sales, stock, price} = data
  return (
    <div className={styles.mobile}>
        <div className={styles.cardImage}>
            <Image src={`/card/${img}`} layout="fill" />
        </div>
        <div className={styles.cardContent}>
            <p><span className={styles.shipping}>automatic shipping</span></p>
            <p className={styles.name}>{name}</p>
            <p className={styles.inventory}>
                <span>Inventory: {stock}</span> |
                <span> Sales: {sales}</span> |
                <span className={styles.price}> ¥{price}</span>
            </p>
        </div>
    </div>
  )
}

export default ProductCard