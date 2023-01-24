import React, { useState } from 'react';
import styles from './SignUpForm.module.css';
import globalStyles from '../../globalStyles.module.css';

export default function SignUpForm ({ SignUp, onChange }) {
    return (
        <form className={styles.form__global} onSubmit={SignUp}>
            <label className={globalStyles.label__global}>Username</label>
            <input className={globalStyles.input__global} name='username' onChange={onChange} />
            <label className={globalStyles.label__global} htmlFor='email'>Email</label>
            <input className={globalStyles.input__global} type={'email'} name='email' onChange={onChange} />
            <label className={globalStyles.label__global} htmlFor='password'>Password</label>
            <input className={globalStyles.input__global} type={'password'} name='password' onChange={onChange} />
            <label className={globalStyles.label__global} htmlFor='password'>Confirm Password</label>
            <input className={globalStyles.input__global} type={'password'} name='confirmpassword' onChange={onChange} />
            <button className={globalStyles.button__submit__global} type='submit' >Sign Up</button>
        </form>
    )
}