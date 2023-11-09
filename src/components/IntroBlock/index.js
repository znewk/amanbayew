import styles from './style.module.css'
import {Image} from "react-bootstrap";
import {useLocalStorage} from "primereact/hooks";
import classnames from "classnames"
import Link from "next/link";

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

            <div className={styles.about}>
                <h3 className={styles.containerTitle}>работа</h3>

                <p className={styles.aboutDesc}>
                    я — фрилансер и полнофункциональный разработчик из астаны,
                    с 11 лет с головой увлеченный в программирование. <br/> <br/>
                    создаю сайты по международным стандартам, которые привлекают клиентов в ваш бизнес и увеличивают прибыль. <br/> <br/>
                    у меня есть талант ко всему, что касается запуска продуктов, от планирования
                    и проектирование вплоть до решения реальных проблем с помощью кода.
                    <br/>
                    в настоящее время работаю в <Link href={'https://www.nitec.kz/'} className={styles.link}>@nitec</Link>, в должности фронт-енд разработчика и занимаюсь
                    поддержкой различных гос. платформ. <br/> <br/>
                    лично занимаюсь ведением обучения и курирования начинающих специалистов которые хотят разносить мир it. <br/>
                    с ребятами поддерживаем свою веб-студию, разрабатываем продукты для малых\средних бизнесов.
                </p>
            </div>
        </div>
    )
}

export default IntroBlock;