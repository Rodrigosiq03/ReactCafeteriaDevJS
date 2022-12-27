import React, { useContext, useState, useEffect } from 'react'
import { AccountContext } from '../AccountLogin';
import LogoutButton from '../LogoutButton';

const Status = () => {

    const { getSession, logout } = useContext(AccountContext); 
    const [status, setStatus] = useState(false);
    
    
    useEffect(() => {
        getSession()
            .then(session => {
                console.log("Session: ", session);
                setStatus(true)
            })
            .catch(err => {
                console.log("Error: ", err);
                setStatus(false)
            })
    }, [getSession])

    return (
        <div>{status ? <LogoutButton logoutOnClick={logout} >Sair</LogoutButton> : "Please login first!!"}</div>
    )

}

export default Status;