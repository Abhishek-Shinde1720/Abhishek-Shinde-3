import styles from './HeroStyles.module.css';
import heroImage from '../../assets/heroImage.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';


import twitterLight from '../../assets/twitter-Light.svg';
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import resume from '../../assets/resume.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon ;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (


    
    
    <section id="hero" className={styles.container}>


        
        
        
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImage} alt="profile picture of Abhishek Shinde" />

            <img className={styles.colorMode}  src={themeIcon} alt="color mode icon" onClick={toggleTheme}/>

        </div>
        <div className={styles.info}>
            <h1>Abhishek 
            <br />
            Shinde</h1>
        
            <h2>Frontend Developer</h2>

            <span>
                <a href="https://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="Twitter Icon" />
                </a>
                <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
            </span>
            <p className={styles.description}>
            Hi,a React developer passionate about crafting engaging digital experiences.
             Designing seamless user interfaces to optimizing performance under the hood.
            </p>
            
            
            <a href={resume} download>
                <button className="hover" >
                    Resume
                </button>
            </a>
        </div>
        
        


    </section>
  )
  
}

export default Hero;