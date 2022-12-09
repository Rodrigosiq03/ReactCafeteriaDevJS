import React, { createContext } from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../../UserPool';
import { useNavigate } from 'react-router-dom';

const AccountContext = createContext();

const AccountLogin = ({ children }) => {
    const navigate = useNavigate();

    const getSession = async () => {
        return await new Promise ((resolve, reject) => {
            const user = Pool.getCurrentUser();

            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject();
                    } else {
                        resolve(session);
                    }
                });
            } else {
                reject();
            }
        })
    }

    const authenticate =  async (Username, Password) => {
        return await new Promise ((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool })

            const authDetails = new AuthenticationDetails({
                Username,
                Password
            })

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log("onSuccess: ", data);
                    resolve(data)
                    navigate('/menu')
                },
                onFailure: (err) => {
                    console.error("onFailure: ", err);
                    reject(err)
                },
                newPasswordRequired: (data) => {
                    console.log("newPasswordRequired: ", data);
                    resolve(data)
                }
            })
        })

    } 
const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
        user.signOut();
        navigate('/login');
    } else {
        console.log('Falhou ao sair!');
    }
}

    return (
        <AccountContext.Provider value={{ authenticate, getSession, logout }}>
            { children }
        </AccountContext.Provider>
    )
}
export { AccountContext, AccountLogin }