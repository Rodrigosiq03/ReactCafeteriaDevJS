import React, { createContext } from 'react'
import Pool from '../../UserPool';
import { useNavigate } from 'react-router-dom';

const AccountContext = createContext();

const AccountRegister = ({ children }) => {
    const navigate = useNavigate();

    const authenticate =  async (Username, Password) => {
        return await new Promise ((resolve, reject) => {

            Pool.signUp(Username, Password, [], null, (err, data) => {
                if (err) {
                    console.error(err)
                    reject(err);
                } else{
                    console.log(data);
                    resolve(data);
                    navigate('/confirm');
                }
            })
        })

    } 


    return (
        <AccountContext.Provider value={{ authenticate }}>
            { children }
        </AccountContext.Provider>
    )
}
export { AccountContext, AccountRegister }