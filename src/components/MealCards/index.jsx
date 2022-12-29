import React, { useState } from 'react';
import styles from './MealCards.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MealModals from '../MealModals';

export default function MealCards({ pathImage, title, description, price }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={styles.card__container}>
            <Card className={styles.card}>
            <CardActionArea className={styles.card__hover} onClick={handleOpen}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={pathImage}
                    title={title}
                />
                <CardContent className={styles.card__content}>
                    <Typography gutterBottom variant="h5" component="div">
                        { title }
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        { `R$ ${price}` }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={styles.card__actions}>
                <Button size="small">Adicionar ao carrinho</Button>
            </CardActions>
            </Card>
            <MealModals open={open} handleClose={handleClose} pathImage={ pathImage } description={ description } price={ price } title={ title }/>
        </div>
    );
}