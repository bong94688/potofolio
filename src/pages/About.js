import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      {/* About Me Section */}
      <div className="about-content" data-aos="fade-right">
      <img
          src="/KakaoTalk_20241212_155741721.jpg"
          alt="Profile"
          tabIndex={-1} /* 포커스 비활성화 */
          draggable="false" /* 드래그 방지 */
          onMouseDown={(e) => e.preventDefault()} /* 클릭 시 기본 동작 방지 */
        />
        <div className="text">
          <h2>About Me</h2>
          <p>
            I'm a backend developer with a passion for creating scalable and efficient solutions.
            With experience in modern frameworks and tools, I deliver impactful projects.
          </p>
        </div>
      </div>

      {/* Awards Section */}
      <div className="about-content" data-aos="fade-right">
      <div className="info-content">
      <h2>Awards</h2>
          <p>
            <strong>23.09.26</strong> / 사회보장원 창업경진대회 Eye(I)Shopping{" "}
            <strong>보건복지부 장관상</strong>
          </p>
          <p>
            <strong>23.10.20</strong> / 법정부 창업경진대회 왕중왕전 Eye(I)Shopping{" "}
            <strong>국무총리 상</strong>
          </p>
        </div>
      </div>

      {/* Activity Section */}
      <div className="about-content" data-aos="fade-right">
      <div className="info-content">
      <h2>Activities</h2>
          <p>
            <strong>2023.04 ~ 2023.09</strong> 네이버클라우드 교육과정 수료
          </p>
          <p>
            <strong>2023.07 ~ 2023.08</strong> [코-취] 구로청년이룸 '코-취'(우수 수료자)
          </p>
          <p>
            <strong>2023.08 ~ 2023.10</strong> 프리온보딩 백엔드 인턴쉽
          </p>
        </div>
      </div>

      {/* Competition Section */}
      <div className="about-content" data-aos="fade-right">
      <div className="info-content">
      <h2>Competitions</h2>
          <p>
            <strong>2023.05 ~ 2023.06</strong> K-DigitalTraining 해커톤 대회(입선)
          </p>
          <p>
            <strong>2023.06 ~ 2023.08</strong> 국민행복 서비스 발굴·창업경진대회(대상)
          </p>
          <p>
            <strong>2023.08 ~ 2023.10</strong> 법정부 창업경진대회 왕중왕전(최우수상)
          </p>
          <p>
            <strong>2023.08 ~ 2023.10</strong> 공개SW 개발자대회 출품
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
