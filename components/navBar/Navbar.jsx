import Image from 'next/image';
import Link from 'next/link';
import styles from "./NavBar.module.css";


export const Navbar = () => {
  return (
    <nav className={styles.mainNav}>
           <Image
            src="/static/PFS.png"
            width={192}
            height={54}
            // className={styles.heroImg}
            alt= "hero image"
          />
      <ul className={styles.navItems}>
        
        <li>
          <Link href="#">PROPIEDADES</Link>
        </li>
        <li>
          <Link href="#">FINANCIAMIENTO</Link>
        </li>
        <li>
          <Link href="#">SERVICIOS</Link>
        </li>
        <li>
          <Link href="#">RENTA EN DOLARES</Link>
        </li>
        <li>
          <Link href="#">NOSOTROS</Link>
        </li>
        <li>
          <Link href="#">BLOG</Link>
        </li>
        <li>
          <Link href="#">CONTACTENOS</Link>
        </li>
        <li>
          <Link href="#"><button>Login</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
