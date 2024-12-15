import styles from './Projects.styles.module.css';
import studysync from '../../assets/studysync.png';
import mxplayerr from '../../assets/mxplayerr.png';
import sportss from '../../assets/sportss.png';
import creditcard from '../../assets/creditcard.png';
import ProjectCard from '../../common/ProjectCard';



function projects() {
  return (
    <section id="projects"  className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectscontainer}>
        <ProjectCard 
          src={studysync} 
          link="https://github.com/Abhishek-Shinde1720/Studysync_frontend_project"
          h3="Studysync"
          p="Course App"
        />
        <ProjectCard
          src={mxplayerr}
          link="https://github.com/Abhishek-Shinde1720/Grp7_MXPLAYER/tree/main/Division%20-B/7_MXPLAYER"
          h3="MX Player"
          p="Music Player Website"
        />
        <ProjectCard
          src={sportss}
          link="https://github.com/Abhishek-Shinde1720/Sports_Website"
          h3="AR-Sports"
          p="Sports Shop"
        />
        <ProjectCard
          src={creditcard}
          link="https://github.com/Abhishek-Shinde1720/Sports_Website"
          h3="Credit Card FD"
          p="Fraud Detection Site"
        />

        </div>
    </section>
  )
}

export default projects;