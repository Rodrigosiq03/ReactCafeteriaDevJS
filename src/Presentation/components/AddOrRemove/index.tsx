import styles from './AddOrRemove.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function AddOrRemove({ quantity, removeOnClick, addOnClick }: { quantity: number, removeOnClick: () => void, addOnClick: () => void }) {
    return (
        <div className={styles.container}>
            <button onClick={removeOnClick} className={styles.button}>
                <RemoveIcon fontSize='small' />
            </button>
            <p className={styles.quantity}>{quantity}</p>
            <button onClick={addOnClick} className={styles.button}>
                <AddIcon fontSize='small' />
            </button>
        </div>
    )
}