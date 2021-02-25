import styles from '../styles/components/Profile.module.css'
export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/42664615?s=460&u=7dbc97652ce8d1160107234d4ec09e50ff158d4e&v=4" alt="Daniel Rangel"/>
            <div>
                <strong>Daniel Rangel</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>

    )
}