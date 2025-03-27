import '../styles/About.css';
import Logo from '../assets/bosslogo.webp';

const About = () => {
  return (
    <section className="about-container">
      <div className="about-text">
        <h2 className="about-header">Boss Construction</h2>
        <h5 className='about-subheader'>We provide professional landscape and hardscape services.
Located in North Branch, MN we service the Twin Cities and Western Wisconsin area.
Reach out today to learn more information on how we can help.
Let us help you make your dream yard come true.</h5>
        <button className="quote-button">Get A Free Quote</button>
      </div>
        <img src={Logo} className='logo2' />
    </section>
  );
}

export default About;
