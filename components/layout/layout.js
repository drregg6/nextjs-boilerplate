import Header from './header';
import Footer from './footer';

import styles from './layout.module.scss';

const Layout = props => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <div className={styles.main}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;