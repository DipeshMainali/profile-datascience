import styles from './Card.module.css';

export default function Card({ title, icon, onHoverList }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                {/* Front Side */}
                <div className={styles.cardFront}>
                    <div className={styles.iconContainer}>
                        <img src={icon} alt={`${title} icon`} className={styles.icon} />
                    </div>
                    <h3>{title}</h3>
                </div>

                {/* Back Side */}
                <div className={styles.cardBack}>
                    <h4>{title}:</h4>
                    <ul>
                        {onHoverList.map((item, index) => (
                            <li key={index}>
                                {item.icon ? <img src={item.icon} alt={`${item.name} icon`} className={styles.small_icon}/> : ''}{item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
