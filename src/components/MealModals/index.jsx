import React from 'react';
import styles from './MealModals.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export default function MealModals({ handleClose, open, title, price, description, pathImage }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24
    };


    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <img className={styles.img__card} src={pathImage} alt={ title }/>
                <Typography className={styles.title} id="modal-modal-title" variant="h4" component="h2">
                    { title }
                </Typography>
                <Typography className={styles.text__content} id="modal-modal-description" variant='p' sx={{ mt: 2 }}>
                    { description }
                </Typography>
                <Typography className={styles.text__content} id="modal-modal-description" variant='h5' sx={{ mt: 2 }}>
                    { `R$ ${price}` }
                </Typography>

            </Box>
        </Modal>
    )
}