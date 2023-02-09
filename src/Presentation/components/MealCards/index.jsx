import React from 'react';
import styles from './MealCards.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MealCards({pathImage, title, description, price, handleClick}) {

    return (
        <div className={styles.card__container}>
            <Card className={styles.card}>
                <CardMedia
                    sx={{
                        height: 140
                    }}
                    image={pathImage}
                    title={title}/>
                <CardContent className={styles.card__content}>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {`R$ ${price}`}
                    </Typography>
                </CardContent>

                <CardActions className={styles.card__actions}>
                    <Button onClick={handleClick} size="small">Adicionar ao carrinho</Button>
                </CardActions>
            </Card>
        </div>
    );
}