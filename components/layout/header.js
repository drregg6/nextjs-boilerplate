import Nav from './nav';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <Nav />
    </header>
  )
}

export default Header;