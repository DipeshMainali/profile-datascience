import styles from './city.module.css';
import ImageSlider from "@/app/component/imageSlider/ImageSlider";

export default function City({city}) {
    console.log(city);
    return (
        <div className={styles.container}>
            <h3>{city.name}</h3>
            <ImageSlider images={city.images}/>
            <p>
                <i>{city.name} </i><span>— {city.description}</span>
            </p>
            <p>{city.content}</p>
        </div>
    );
}
