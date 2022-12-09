import React, { useContext, useState, useEffect } from 'react'
import { AccountContext } from '../AccountLogin';

const Status = () => {
    const { getSession, logout } = useContext(AccountContext); 
    const [status, setStatus] = useState(false);
    
    
    useEffect(() => {
        getSession()
            .then(session => {
                console.log("Session: ", session);
                setStatus(true)
            })
    }, [getSession])



    return (
        <div>{status ? <button onClick={logout}>Sair</button> : "Please log in first!"}</div>
    )

}

export default Status;