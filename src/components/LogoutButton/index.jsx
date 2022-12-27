import React from 'react';
import globalStyles from '../../globalStyles.module.css';

export default function LogoutButton ({ children, logoutOnClick }) {
    return (
        <button className={globalStyles.logout__global__btn} onClick={logoutOnClick}> { children } </button>
    )
}