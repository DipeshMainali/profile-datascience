import styles from './Cities.module.css';
import visitedCities from "@/app/util/visitedCity";
import City from "@/app/component/CityCard/City";
import unvisitedCity from "@/app/util/unvisitedCity";

export default function Cities() {
    return (
        <div className={styles.container}>
            <h1>Cities I've Lived In</h1>
            <ul className={styles.livedList}>
                {visitedCities.map(item =>
                    <li>
                        <City city={item}/>
                    </li>
                )}
            </ul>

            <h1>Cities I’d Like to Visit</h1>
            <ol className={styles.visitList}>
                {unvisitedCity.map(item =>
                    <li>
                        <City city={item}/>
                    </li>
                )}
            </ol>
        </div>
    );
}
