import styles from './style.module.css'
import {Image} from "react-bootstrap";
import {useLocalStorage} from "primereact/hooks";
import classnames from "classnames"

const IntroBlock = () => {
    const [theme, setTheme] = useLocalStorage('dark', 'theme');

    const isDark = () => {
        if(theme == 'dark'){
            return true
        } else {
            return false
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.gifBody}>
                <Image src={'/cat.gif'} className={styles.gif}/>
            </div>
            <div className={classnames(styles.helloMessage, !isDark() && styles.lightMessage )}>
                привет, я инди-разработчик из астаны!
            </div>

            <div className={styles.bio}>
                <div className={styles.bioLeft}>
                    <h1 className={styles.fio}>arlan amanbay</h1>
                    <span className={styles.subFio}>
                        мастер фронт-енд инженер ( разработка \ обучение )
                    </span>
                </div>
                <div>
                    <Image src={"/avatar2.jpeg"} className={styles.avatar}/>
                </div>
            </div>
        </div>
    )
}

export default IntroBlock;