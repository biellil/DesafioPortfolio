import styles from './Header.module.scss'
import Developericone from '../assets/DeveloperPortfolio-icone.png'
import IgniteLogo from '../assets/Portfolio.svg'

export function Header(){
    return(
        <div className={styles.Header}>
          <a href="https://github.com/biellil"  ><img style={{height:"4rem"}} src={Developericone} alt="" /> </a>
          
          <a href="https://github.com/biellil" >  <img src={IgniteLogo} alt="IgniteLog" /> </a>
        </div>
    );
}