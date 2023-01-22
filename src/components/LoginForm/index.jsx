import React from 'react';
import globalStyles from '../../globalStyles.module.css';

export default function LoginForm({ submitFunction, isAdmin, admin, onChange }) {

    return (
        <form className={globalStyles.form__global} onSubmit={submitFunction}>
            <label className={globalStyles.label__global}>Username</label>
            <input className={globalStyles.input__global} name='username' onChange={onChange} />
            <label className={globalStyles.label__global} htmlFor='password'>Password</label>
            <input className={globalStyles.input__global} name='password' type={'password'} onChange={onChange} />
            <button style={{marginTop: '20px'}} className={globalStyles.button__submit__global} type='submit' >Login</button>
        </form>
    )
}