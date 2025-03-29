import Button from '../common/Button';
import './AboutSection.css';
import About from '../../../public/images/about.png';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum
            dolor sit amet consetetur sadipscing elitr.
          </p>
          <Button text="Learn More" className="about-btn" />
        </div>

        <div className="about-image">
          <img src={About} alt="Our team" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;