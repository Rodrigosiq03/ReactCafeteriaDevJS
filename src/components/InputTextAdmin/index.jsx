import React from 'react';
import { TextField } from '@mui/material/';
import { styled } from '@mui/material/styles';
import styles from './InputTextAdmin.module.css';


const TextFieldAdmin = styled(TextField)({
    '& label.Mui-focused': {
        color: '#F0DB4F',
    },
    '& label.MuiInputLabel-root': {
        color: '#F0DB4F',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#F0DB4F',
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& input': {
            color: 'white',
        },
        '& fieldset': {
            borderColor: 'white',
            color: 'white',

        },
        '&:hover fieldset': {
            borderColor: '#F0DB4F',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#F0DB4F',
            color: 'white'
        },
    },
});

export default function InputTextAdmin ({ labelInput, value, onChange, type=null, required=false }) {
    return (
        <TextFieldAdmin 
            type={type}
            onChange={onChange} 
            value={value} 
            className={styles.input} 
            required={required} 
            label={labelInput} 
            variant="outlined" />
    )
}


