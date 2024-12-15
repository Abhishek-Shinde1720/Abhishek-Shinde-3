import Hero from '../Hero/Hero';
import projects from '../projects/projects';
import skills from '../Skills/skills';
import styles from './Header.styles.module.css';
import {Link} from 'react-scroll';

function Header() {
  return (
    

<div className={styles.navbar}>
            <nav>
                <img src="/Title_logo.png" alt="profile image"  className={styles.logo}/>
                <ul>
            
                    <li><Link  to="hero" href=''
                        spy={true} 
                        smooth={true} 
                         offset={-80} 
                        duration={500} onClick={Hero} >Home</Link> </li>
                    <li> <Link  to="projects"  href='#project'
                        spy={true} 
                        smooth={true} 
                         offset={-100} 
                        duration={500} onClick={projects} >projects</Link></li>
                    <li>  <Link  to="skills"  href='#skills'
                        spy={true} 
                        smooth={true} 
                         offset={-60} 
                        duration={500} onClick={skills} >Skills</Link></li>
                    <li>  <Link  to="contact" href='#contact'
                        spy={true} 
                        smooth={true} 
                         offset={-80} 
                        duration={500} onClick={skills} >Contact</Link></li>
                </ul>
    
             </nav>

        </div>
  )
}

export default Header;