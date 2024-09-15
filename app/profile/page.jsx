import Image from 'next/image';
import styles from './Profile.module.css';
import Card from "@/app/component/skillCard/Card";
import language from "@/app/util/language";
import ConnectFooter from "@/app/component/footer/ConnectFooter";

export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.profileImageWrapper}>
                <Image
                    src="/profile_pic.png"
                    alt="Dipesh's Profile"
                    width={250}
                    height={250}
                    className={styles.profileImage}
                />
            </div>
            <div className={styles.welcomeSection}>
                <p className={styles.description}>
                    I'm a passionate web developer and data scientist. I love building innovative web technologies and
                    solving data problems. Welcome to my world!
                </p>
            </div>

            {/* Skills Section */}
            <section className={styles.skillsSection}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                <div className={styles.skillsContainer}>
                    <Card title={"Language"} icon={"/icons/coder.svg"} onHoverList={language}/>
                    <a href={"/cities"}>
                        <Card title={"Cities"} icon={"/icons/city.svg"} onHoverList={[{name: "Click to view"}]}/>
                    </a>
                </div>
            </section>

            {/* Connect Section */}
            <section className={styles.connectSection}>
                <ConnectFooter/>
            </section>
        < /div>
    );
}
