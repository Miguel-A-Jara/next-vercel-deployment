import ActiveLink from "./ActiveLink"
import styles from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(i => (
          <ActiveLink key={i.href} href={i.href} text={i.text} />
        ))
      }
    </nav>
  )
}

export default Navbar
