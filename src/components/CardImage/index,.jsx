import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './CardImage.module.css'

export default function CardImage({ pathImage, path, children }) {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(path)} style={{backgroundImage: `url(${pathImage})`}} className={styles.container__card__image}>
            <Link className={styles.link} to={path} > { children } </Link>
        </button>
    )
}