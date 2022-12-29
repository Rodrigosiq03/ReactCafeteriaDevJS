import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CardImage.module.css'

export default function CardImage({ pathImage, path, children }) {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(path)} style={{backgroundImage: `url(${pathImage})`}} className={styles.container__card__image}>
            { children } 
        </button>
    )
}