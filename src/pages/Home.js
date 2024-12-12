import React from 'react';
import '../styles/Home.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { Link } from 'react-router-dom';

function Home() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <h1 data-aos="fade-up">Welcome to Simbonggyo's World</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Crafting impactful digital experiences with code and creativity.
        </p>
        <Link to="/about" className="cta-button" data-aos="fade-up" data-aos-delay="400">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Home;
