import React from 'react';
import RequestFunctions from '../ResquestFunctions';
import styles from './FunctionsADMIN.module.css';

export default function FunctionsADMIN() {
    return (
        <div>
            <h1>Essas são as funcionalidades disponiveis!</h1>
            <RequestFunctions />
        </div>
    )
}