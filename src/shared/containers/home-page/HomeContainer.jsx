import styles from './HomeContainer.module.scss'
import Header from '../../components/header/Header'
const HomeContainer = () => {

    return (
        <div className={`${styles['home']}`}>
            <Header />
        </div>
    )
}

export default HomeContainer