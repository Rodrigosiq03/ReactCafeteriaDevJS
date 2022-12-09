import React, { useState, useContext } from 'react';
import styles from './Signup.module.css';
import { AccountContext } from '../../components/AccountRegister';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { authenticate } = useContext(AccountContext)

    const missingUpperCase = "Password did not conform with policy: Password must have uppercase characters"
    const missingSymbol = "Password did not conform with policy: Password must have symbol characters"
    const missingLowerCase = "Password did not conform with policy: Password must have lowercase characters"
    const lengthNotEnough = "Password did not conform with policy: Password not long enough"
    const missingNumeric = "Password did not conform with policy: Password must have numeric characters"

    const onSubmit = (event) => {
        event.preventDefault();

        authenticate(email, password)
            .then(data => {
                console.log("Registered!", data);
            })
            .catch(err => {
                if (err.message === "Username should be an email.") {
                    document.getElementById('msgEmailError').classList.remove(styles.hidden__error)
                    document.getElementById('msgEmailError').classList.add(styles.msg__email__error)
                }
                else if (err.message === "An account with the given email already exists.") {
                    // email não válido!!
                    document.getElementById('msgEmailError').classList.remove(styles.msg__email__error)
                    document.getElementById('msgEmailError').classList.add(styles.hidden__error)
                    // email ja existe
                    document.getElementById('msgEmailExistsAlready').classList.remove(styles.hidden__error)
                    document.getElementById('msgEmailExistsAlready').classList.add(styles.msg__email__error)
                }
                else if (err.message === missingUpperCase) {
                    document.getElementById('msgPasswordUpper').classList.remove(styles.hidden__error)
                    document.getElementById('msgPasswordUpper').classList.add(styles.msg__password__error)
                }
                else if (err.message === missingLowerCase) {
                    document.getElementById('msgPasswordLower').classList.remove(styles.hidden__error)
                    document.getElementById('msgPasswordLower').classList.add(styles.msg__password__error)
                }
                else if (err.message === missingSymbol) {
                    document.getElementById('msgPasswordSymbol').classList.remove(styles.hidden__error)
                    document.getElementById('msgPasswordSymbol').classList.add(styles.msg__password__error)
                }
                else if (err.message === lengthNotEnough) {
                    document.getElementById('msgPasswordLength').classList.remove(styles.hidden__error)
                    document.getElementById('msgPasswordLength').classList.add(styles.msg__password__error)
                }
                else if (err.message === missingNumeric) {
                    document.getElementById('msgPasswordNumeric').classList.remove(styles.hidden__error)
                    document.getElementById('msgPasswordNumeric').classList.add(styles.msg__password__error)
                }
                console.error("Failed to register!", err);
            })
    }


    return (
        <div>
            <h1 className={styles.text__hint}>Realize o Cadastro</h1>
            <form className={styles.form__signup} onSubmit={onSubmit}>
                <label className={styles.label__signup} htmlFor='email'>Email</label>
                <input className={styles.input__signup} value={email} onChange={(event) => setEmail(event.target.value)} />
                <h4 id='msgEmailError' className={styles.hidden__error}>O usuário não corresponde a um email válido!!</h4>
                <h4 id='msgEmailExistsAlready' className={styles.hidden__error}>O email que você está tentando se cadastrar ja existe!!</h4>
                <label className={styles.label__signup} htmlFor='password'>Password</label>
                <input className={styles.input__signup} value={password} onChange={(event) => setPassword(event.target.value)} />

                <h4 id='msgPasswordUpper' className={styles.hidden__error}>A senha deve conter carcteres minúsculos!!</h4>
                <h4 id='msgPasswordLower' className={styles.hidden__error}>A senha deve conter carateres maiúsculos!!</h4>
                <h4 id='msgPasswordSymbol' className={styles.hidden__error}>A senha deve conter carateres especiais!!</h4>
                <h4 id='msgPasswordLength' className={styles.hidden__error}>A senha deve ter no mínimo 8 carateres!!</h4>
                <h4 id='msgPasswordNumeric' className={styles.hidden__error}>A senha deve conter carateres numéricos!!</h4>

                <button className={styles.button__submit__signup} type='submit' >Signup</button>
            </form>
        </div>
    )
}