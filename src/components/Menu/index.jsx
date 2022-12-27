import React from 'react';
import styles from './Menu.module.css';
import cardapioImage from '../../assets/images/cardapio/pratos/1.jpg';
import agendamentoImage from '../../assets/images/cardapio/pratos/2.jpg';
import sobreNosImage from '../../assets/images/cardapio/pratos/3.jpg';
import contatoImage from '../../assets/images/cardapio/pratos/4.jpg';
import CardImage from '../CardImage/index,';


export default function Menu() {    
    return (
        <div className={styles.main__container__card__image}>
            <div className={styles.column__card__image}>
                <div className={styles.row__card__image__1}>
                    <CardImage path={'/cardapio'} pathImage={cardapioImage} >Cardapio</CardImage>
                    <div className={styles.vertical__plus__line}>
                        <CardImage path={'/agendamento'} pathImage={agendamentoImage} >
                            Agendamento
                        </CardImage>
                    </div>
                </div>
                <div className={styles.row__card__image__2}>
                    <CardImage path={'/sobrenos'} pathImage={sobreNosImage} >Sobre nós</CardImage>
                    <div className={styles.vertical__plus__line}>
                        <CardImage path={'/contato'} pathImage={contatoImage} >Contato</CardImage>
                    </div>
                </div>
            </div>
        </div>
    )
}