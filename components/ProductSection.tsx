import React from 'react'
import styles from "../styles/scss/section.module.scss"

interface Prop {
    children: React.ReactNode,
    title:string,
}

const ProductSection = ({children, title}:Prop) => {
  return (
    <section className={styles.section}>
        <div className={styles.sectionTitle}>
            <h3 >{title}</h3>
        </div>
        <div className={styles.sectionBody}>
            {children}
        </div>
    </section>
  )
}

export default ProductSection