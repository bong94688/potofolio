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
        <h1 data-aos="fade-up">안녕하세요. 개발자 심봉교입니다.</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          저를 좀더 알고싶다면 하단에 Learn More 버튼을 클릭하세요.
        </p>
        <Link to="/about" className="cta-button" data-aos="fade-up" data-aos-delay="400">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Home;
