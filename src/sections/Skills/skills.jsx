import SkillList from '../../common/SkillList';
import styles from './skillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
// import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';

function skills() {
  // const { theme } = useTheme();
  // const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id='skills' className={styles.container}>
        <h1 className="sectionTitle">
            Skills
        </h1>
        <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="Javascript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Python" />
        </div>
        <hr />
        <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="Node" />
        <SkillList src={checkMarkIcon} skill="Cybersecurity" />
        <SkillList src={checkMarkIcon} skill="Git/Github" />
        <SkillList src={checkMarkIcon} skill="TailwindCSS" />
        </div>
      
        <hr />
        <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="Artificial Intelligence" />
        <SkillList src={checkMarkIcon} skill="Figma" />
        <SkillList src={checkMarkIcon} skill="Data Analytics" />
        </div>
        


        
            
            
    </section>
  )
}

export default skills;