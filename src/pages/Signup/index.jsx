import React, { useState, useContext } from 'react';
import styles from './Signup.module.css';
import globalStyles from '../../globalStyles.module.css'
import { AccountContext } from '../../components/AccountRegister';
import { lowerCaseLetters, upperCaseLetters, symbolsValid, numbersValid } from '../../utils/regex';
import CardGlobal from '../../components/CardGlobal';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { authenticate } = useContext(AccountContext)

    const validatePassword = (event) => {
        event.preventDefault();

        setPassword(event.target.value)

        let input = document.getElementById('passwordInput')
        var upperCaseError = document.getElementById('msgPasswordUpper')
        var lowerCaseError = document.getElementById('msgPasswordLower')
        var symbolError = document.getElementById('msgPasswordSymbol')
        var lengthError = document.getElementById('msgPasswordLength')
        var numericError = document.getElementById('msgPasswordNumeric')

        if (input.value.match(lowerCaseLetters)) {
            upperCaseError.classList.remove(styles.msg__password__error)
            upperCaseError.classList.add(styles.msg__password__valid)
        } else {
            upperCaseError.classList.remove(styles.msg__password__valid)
            upperCaseError.classList.add(styles.msg__password__error)
        }

        if (input.value.match(upperCaseLetters)) {
            lowerCaseError.classList.remove(styles.msg__password__error)
            lowerCaseError.classList.add(styles.msg__password__valid)
        } else {
            lowerCaseError.classList.remove(styles.msg__password__valid)
            lowerCaseError.classList.add(styles.msg__password__error)
        }

        if (input.value.match(symbolsValid)) {
            symbolError.classList.remove(styles.msg__password__error)
            symbolError.classList.add(styles.msg__password__valid)
        } else {
            symbolError.classList.add(styles.msg__password__error)
            symbolError.classList.remove(styles.msg__password__valid)
        }

        if (input.value.length >= 8) {
            lengthError.classList.remove(styles.msg__password__error)
            lengthError.classList.add(styles.msg__password__valid)
        } else {
            lengthError.classList.add(styles.msg__password__error)
            lengthError.classList.remove(styles.msg__password__valid)
        }

        if (input.value.match(numbersValid)) {
            numericError.classList.remove(styles.msg__password__error)
            numericError.classList.add(styles.msg__password__valid)
        } else {
            numericError.classList.add(styles.msg__password__error)
            numericError.classList.remove(styles.msg__password__valid)
        }
        

    }

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
                } else {
                    document.getElementById('msgEmailError').classList.remove(styles.msg__email__error)
                    document.getElementById('msgEmailError').classList.add(styles.hidden__error)
                } 
                if (err.message === "An account with the given email already exists.") {
                    // email ja existe
                    document.getElementById('msgEmailExistsAlready').classList.remove(styles.hidden__error)
                    document.getElementById('msgEmailExistsAlready').classList.add(styles.msg__email__error)
                } else {
                    document.getElementById('msgEmailExistsAlready').classList.add(styles.hidden__error)
                    document.getElementById('msgEmailExistsAlready').classList.remove(styles.msg__email__error)
                }
                
                console.error("Failed to register!", err);
            })
    }


    return (
        <div className={globalStyles.div__container__card}>
            <CardGlobal>
                <h1 className={styles.text__hint__register}>Realize o Cadastro</h1>
                <form name='loginForm' className={styles.form__register} onSubmit={onSubmit}>
                    <label className={globalStyles.label__global} htmlFor='email'>Email</label>
                    <input className={globalStyles.input__global} value={email} onChange={(event) => setEmail(event.target.value)} />
                    <h4 id='msgEmailError' className={styles.hidden__error}>O usuário não corresponde a um email válido!!</h4>
                    <h4 id='msgEmailExistsAlready' className={styles.hidden__error}>O email que você está tentando se cadastrar ja existe!!</h4>
                    <label className={globalStyles.label__global} htmlFor='password'>Password</label>
                    <input id='passwordInput' className={globalStyles.input__global} value={password} onChange={validatePassword} />
                    <h4 id='msgPasswordUpper' className={styles.msg__password__error}>A senha deve conter carcteres minúsculos!!</h4>
                    <h4 id='msgPasswordLower' className={styles.msg__password__error}>A senha deve conter carateres maiúsculos!!</h4>
                    <h4 id='msgPasswordSymbol' className={styles.msg__password__error}>A senha deve conter carateres especiais!!</h4>
                    <h4 id='msgPasswordLength' className={styles.msg__password__error}>A senha deve ter no mínimo 8 carateres!!</h4>
                    <h4 id='msgPasswordNumeric' className={styles.msg__password__error}>A senha deve conter carateres numéricos!!</h4>
                    <button className={globalStyles.button__submit__global} type='submit' >Signup</button>
                </form>
            </CardGlobal>
        </div>
    )
}