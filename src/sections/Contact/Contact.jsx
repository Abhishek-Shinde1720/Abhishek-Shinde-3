import styles from './ContactStyles.module.css';

function Contact() {
    
  return (
    
    
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action='' >
            <div className="formgroup">
                <label htmlFor="name" hidden >
                    Name</label>
                    <input type="text" name="name"   id="name" placeholder="Name" required  />

            </div>

            <div className="formgroup">
                <label htmlFor="email" hidden>
                    Email</label>
                    <input type="text" name="email"  id="email" placeholder="Email" required  />

            </div>

            <div className="formgroup">
                <label htmlFor="message" hidden>
                    Message</label>
                    
                    <textarea name="message"  id="message" placeholder="Message" ></textarea>
            </div>
            <input className="hover btn" type="submit" value="Submit"/>
        </form>

    </section>
  )
}

export default Contact;