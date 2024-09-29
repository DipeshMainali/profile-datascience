import styles from './ConnectFooter.module.css';

export default function ConnectFooter() {
    return (
        <div>
            <footer className={styles.footer}>
                <h3>Connect with Me</h3>
                <div className={styles.socialLinks}>
                    <a href="https://linkedin.com/in/dipesh-mainali" target="_blank" rel="noopener noreferrer">
                        <img src="/profile-datascience/icons/linkedin.svg" alt="LinkedIn" className={styles.icon} />
                    </a>
                    <a href="https://github.com/DipeshMainali" target="_blank" rel="noopener noreferrer">
                        <img src="/profile-datascience/icons/github.svg" alt="GitHub" className={styles.icon} />
                    </a>
                    <a href="https://x.com/dipesh_mainali" target="_blank" rel="noopener noreferrer">
                        <img src="/profile-datascience/icons/twitter.svg" alt="Twitter" className={styles.icon} />
                    </a>
                    <a href="mailto:dipeshmainalidm@gmail.com">
                        <img src="/profile-datascience/icons/email.svg" alt="Email" className={styles.icon} />
                    </a>
                </div>
            </footer>
        </div>
    );
}
