import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Auth } from 'aws-amplify';

import styles from '../ForgotPassword/ForgotPassword.module.css';

import Alert from '@mui/material/Alert';
import { Form, Input } from '../../../Presentation/styledComponents/Form';

const initialCredentialsState = {
    username: '',
    newPassword: '',
    forgotCode: '',
}

export default function ForgotPasswordConfirmation() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState(initialCredentialsState);
    const [incorrectError, setIncorrectError] = useState(false);
    const [emptyError, setEmptyError] = useState(false);
    const [passwordLengthError, setPasswordLengthError] = useState(false);

    let username = localStorage.getItem('username') as string;

    function onChange(event: { target: { name: any; value: any; }; }) {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
        setIncorrectError(false);
        setEmptyError(false);
        setPasswordLengthError(false);
    }

    async function forgotPasswordSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        const { newPassword, forgotCode } = credentials;
        try {
            await Auth.forgotPasswordSubmit(username, forgotCode, newPassword);
            console.log('Password successfully changed');
            navigate('/login');
            localStorage.removeItem('username');
        } catch (error: any) {
            console.error("Failed to change password ", error);
            console.log(error.message);
            if (error.code === 'CodeMismatchException') {
                setIncorrectError(true);
            }
            if (error.message === 'Password does not conform to policy: Password not long enough') {
                setPasswordLengthError(true);
            }
            if (error.message === 'Password cannot be empty' || error.message === 'Confirmation code cannot be empty') {
                setEmptyError(true);
            }
        }
    }


    return (
        <div>
            <h2 className={styles.title__forgot__password} >Redefina sua senha</h2>
            <p>Insira o código de confirmação que foi enviado para o seu e-mail.</p>
            <Form onSubmit={forgotPasswordSubmit}>
                <label style={{fontSize: '20px', paddingRight: '16px'}} className={styles.label__username}>Código de confirmação</label>
                <Input name='forgotCode' type={'number'} onChange={onChange} />
                <label style={{fontSize: '20px', paddingRight: '116px', paddingTop: '10px'}} className={styles.label__username}>Nova senha</label>
                <Input  name='newPassword' type={'password'} onChange={onChange} />
                <button className={styles.button__submit} type='submit'>Redefinir senha</button>
            </Form>
            { incorrectError &&
                <Alert 
                    className={styles.alert__error} 
                    onClose={() => setIncorrectError(false)} 
                    severity="error" 
                    variant='filled'>
                        Código de verificação incorreto!!
                </Alert> }
            { emptyError &&
                <Alert
                    className={styles.alert__error}
                    onClose={() => setEmptyError(false)}
                    severity="error"
                    variant='filled'>
                        Preencha todos os campos acima!!
                </Alert> }
            { passwordLengthError &&
                <Alert
                    className={styles.alert__error}
                    onClose={() => setPasswordLengthError(false)}
                    severity="error"
                    variant='filled'>
                        A senha deve ter no mínimo 8 caracteres!!
                </Alert> }
        </div>
    )
}