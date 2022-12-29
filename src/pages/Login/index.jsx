import React, { useState, useContext } from 'react';
import { AccountContext } from '../../components/AccountLogin';
import styles from './Login.module.css';
import globalStyles from '../../globalStyles.module.css';
import { Link } from 'react-router-dom';
import CardGlobal from '../../components/CardGlobal';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);

    const { authenticate } = useContext(AccountContext)

    const isAdmin = (event) => {
        event.preventDefault();
        if (!admin) {
            setAdmin(true)
        } else {
            setAdmin(false)
        }
        console.log(admin);
    }


    const onSubmit = (event) => {
        event.preventDefault();

        authenticate(email, password, admin)
            .then(data => {
                console.log("Logged in!", data);
            })
            .catch(err => {
                if (err.message === "Incorrect username or password.") {
                    document.getElementById('msgError').classList.remove(styles.hidden__error)
                    document.getElementById('msgError').classList.add(styles.error__login)

                }
                console.error("Failed to log in ", err);
            })
    }


    return (
        <div className={globalStyles.div__container__card}>
            <CardGlobal>
                <h1 className={globalStyles.text__hint__global}>Realize o Login</h1>
                <h3 id='msgError' className={styles.hidden__error}>Usuário ou senha incorretos!!</h3>
                <form className={globalStyles.form__global} onSubmit={onSubmit}>
                    <label className={globalStyles.label__global} htmlFor='email'>Email</label>
                    <input className={globalStyles.input__global} value={email} onChange={(event) => setEmail(event.target.value)} />
                    <label className={globalStyles.label__global} htmlFor='password'>Password</label>
                    <input className={globalStyles.input__global} value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button style={{marginTop: '20px'}} className={globalStyles.button__submit__global} type='submit' >Login</button>
                    <FormControlLabel control={<Checkbox value={admin} onChange={isAdmin} defaultunchecked='true' />} className={globalStyles.label__global} label="É um ADMIN?" />
                </form>
                <Link className={styles.link__register} to={'/register'}>Registre-se</Link>
            </CardGlobal>
        </div>
    )
}