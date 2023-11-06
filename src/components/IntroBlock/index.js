import styles from './style.module.css'
import {Image} from "react-bootstrap";
import {useLocalStorage} from "primereact/hooks";

const IntroBlock = () => {
    const [theme, setTheme] = useLocalStorage('dark', 'theme');
    return (
        <div className={styles.container}>
            <div className={styles.gifBody}>
                <Image src={'/cat.gif'} className={styles.gif}/>
            </div>
            <div className={styles.helloMessage}>
                привет, я инди-разработчик из астаны!
            </div>

            <div className={styles.bio}>


            </div>
        </div>
    )
}

export default IntroBlock;