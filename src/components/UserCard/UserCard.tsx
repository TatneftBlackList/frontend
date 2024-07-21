
import styles from './UserCard.module.css';

interface User {
    id: number;
    name: string;
    passport: string;
    reason: string;
}

const UserCard: React.FC<{user: User}> =({user}) =>{
    return(
        <div className={styles.container}>
            <div className={styles.user__card}>
                <div className={styles.user__image}>
                    <img src='#'/>
                </div>
                <div className={styles.user__info}>
                    <h3 className={styles.user__name}>{user.name}</h3>
                    <p><strong>паспортные данные</strong> {user.passport}</p>
                    <p><strong>Причина в черном списке</strong> {user.reason}</p>
                </div>
            </div>

        </div>

    )
}
export default UserCard;