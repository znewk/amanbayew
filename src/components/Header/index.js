import styles from './style.module.css'
import ToggleTheme from "../ToggleTheme";
import Link from "next/link";
import {Image} from "react-bootstrap";
import {useLocalStorage} from "primereact/hooks";
import classnames from "classnames"

const Header = () => {

    const [theme, setTheme] = useLocalStorage('dark', 'theme');
    const isDark = () => {
        if(theme == 'dark'){
            return true
        } else {
            return false
        }
    }

    return  (
        <div className={styles.header}>
            <div className={styles.menu}>
                <Link href={'/'} className={styles.logo}>
                    <Image src={isDark() ? '/logo_white.png' : '/logo.png'} className={styles.logoImg}/>
                    <h1 className={classnames(styles.logoSpan, !isDark() && styles.light )} >arlan amanbay</h1>
                </Link>

                <nav className={styles.nav}>
                    <Link href={'/'} className={classnames(styles.links, !isDark() && styles.light)}>
                        <span>работы</span>
                    </Link>
                    <Link href={'/'} className={classnames(styles.links, !isDark() && styles.light)}>
                        <span>посты</span>
                    </Link>
                    <Link href={'/'} className={styles.githubLink}>
                        <Image src={isDark() ? '/github.png' : '/github_black.png'} className={styles.git}/>
                        <span className={classnames(!isDark() && styles.light)}>github</span>
                    </Link>
                </nav>
            </div>

            <ToggleTheme/>
        </div>
    )
}

export default Header;