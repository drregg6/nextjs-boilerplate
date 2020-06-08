import Link from 'next/link';

import styles from './nav.module.scss';

const Nav = () => {
  return (
    <ul className={styles.nav}>
      <li>
        <Link href='/'><a>Home</a></Link>
      </li>
      <li>
        <Link href='/about'><a>About</a></Link>
      </li>
      <li>
        <Link href='/contact'><a>Contact</a></Link>
      </li>
    </ul>
  )
}

export default Nav;