import React from "react";
import "../styles/About.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
          
        CONTACT

Email simbonggy@gmail.com

Liekdin https://www.linkedin.com/in/%EB%B4%89%EA%B5%90-%EC%8B%AC-35979829a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

Github https://github.com/bong94688

Velog https://velog.io/@bong9468/posts

        </div>
      </div>

      <div className="about-content" data-aos="fade-right">
  <div className="info-content">
    <h2>Skills</h2>
    <div className="skills-icons">
  <i className="fab fa-java" aria-hidden="true"></i> {/* Java 아이콘 */}
  <i className="fab fa-python" aria-hidden="true"></i> {/* Python 아이콘 */}
  <i className="fab fa-js-square" aria-hidden="true"></i> {/* JavaScript 아이콘 */}
</div>
  </div>
</div>
<div className="about-content" data-aos="fade-right">
  <div className="info-content career-content">
    <h2>Education</h2>
    
    <div className="career-item">
  <i className="fas fa-school"></i> {/* 학교 아이콘 */}
  <div className="career-details">
    <h3>인하공전</h3>
    <p>2018.02 ~ 2023.02</p>
  </div>
</div>
  </div>
</div>
<div className="about-content" data-aos="fade-right">
<div className="text">
          
          <h2>About Me</h2>
  
          <p>
<strong>안녕하세요.</strong> 저는 웹과 앱 개발에 열정을 가진 개발자 심봉교입니다. 컴퓨터 시스템 전공을 기반으로 
이론과 실무를 병행하며, 다양한 프로젝트를 통해 전문성을 키워왔습니다. 주요 프로젝트로는 
<strong>시각장애인을 위한 쇼핑 솔루션 "아이쇼핑(Eye(I)Shopping)"</strong>이 있으며, 머신러닝과 ChatGPT를 활용해 
정보 접근성을 개선하고 사용자 중심의 기능을 설계했습니다. 또한, <strong>"맛자취"</strong> 프로젝트에서는 
클라우드 기반의 CI/CD 파이프라인 구축과 실시간 위치 기반 서비스를 성공적으로 구현한 경험이 있습니다.
</p>
<p>
<strong>목표 및 비전</strong>은 효율적인 코드를 작성하며 사용자 중심의 서비스를 제공하는 개발자가 되는 것입니다. 
더 나아가 인공지능 기술을 활용하여 더 나은 디지털 환경을 만들어 나가고자 합니다.
</p>
        </div>
</div>
<div className="about-content" data-aos="fade-right">
  <div className="info-content career-content">
    <h2><i class="fas fa-briefcase"></i> Career</h2>

    <div className="career-item">
      <div className="career-date">
        <p>2023.04 ~ 2023.11</p>
      </div>
      <div className="career-details">
        <h3>아이쇼핑</h3>
        <p>
          시각장애인을 위한 맞춤형 쇼핑 솔루션 개발 프로젝트에 참여했습니다. 머신러닝 및 ChatGPT를 활용하여 사용자 경험을 개선하였으며, 백엔드와 클라우드 인프라 최적화를 담당했습니다.
        </p>
        <ul>
          <li>AI 기반 맞춤형 추천 기능 개발</li>
          <li>Spring Boot를 활용한 백엔드 구축</li>
          <li>Redis를 활용한 캐싱 시스템 최적화</li>
          <li>클라우드 인프라(AWS, NCP) 관리</li>
        </ul>
      </div>
    </div>

    <div className="career-item">
      <div className="career-date">
        <p>2023.11 ~ 2024.12</p>
      </div>
      <div className="career-details">
        <h3>아이페이지온</h3>
        <p>
          백엔드 개발자로 활동하며 CI/CD 구축, API 설계 및 데이터 최적화 작업을 진행했습니다. 코드 품질 향상과 데이터 분석 기반의 서비스 개선에 기여하였습니다.
        </p>
        <ul>
          <li>API Gateway를 활용한 효율적인 API 설계</li>
          <li>QueryDSL 기반 동적 쿼리 최적화</li>
          <li>데이터 분석 도구를 활용한 통계 리포트 자동화</li>
          <li>JWT 인증 및 권한 관리 구현</li>
        </ul>
      </div>
    </div>
  </div>
</div>


      {/* Awards Section */}
      <div className="about-content" data-aos="fade-right">
        
  <div className="info-content">
  <h2>Awards</h2>
    <div className="award-item">
      <p className="award-date"><strong>23.09.26 사회보장원 창업경진대회 - Eye(I)Shopping 대상 (보건복지부 장관상)</strong></p>
      <p className="award-title">
      </p>
      <a
        href="https://www.ssis.or.kr/lay1/bbs/S1T67C101/B/101/view.do?article_seq=125385"
        target="_blank"
        className="custom-award-image-link"
      >
        <img
          src="image.png"
          alt="Award 1"
          className="custom-award-image"
        />
      </a>
    </div>
    <div className="award-item">
      <p className="award-date"><strong>23.10.20 범정부 창업경진대회 왕중왕전 - Eye(I)Shopping 최우수상(국무총리 상)</strong></p>
      <a
        href="https://www.ssis.or.kr/lay1/bbs/S1T67C101/B/101/view.do?article_seq=125431"
        target="_blank"
        className="custom-award-image-link"
      >
        <img
          src="image2.JPG"
          alt="Award 2"
          className="custom-award-image"
        />
      </a>
    </div>
  </div>
</div>


      {/* Activity Section */}
      <div className="about-content" data-aos="fade-right">
      <div className="info-content">
      <h2>Activities</h2>
          <p>
            <strong>2023.04 ~ 2023.09</strong> 네이버클라우드 교육과정 수료
          </p>
          <p>NCP 교육과 웹 풀스택 교육</p>
          <p>
            <strong>2023.05 ~ 2023.06</strong> K-DigitalTraining 해커톤 대회
          </p>
          <p>총 3회 멘토링 기회</p>
          <p>
            <strong>2023.07 ~ 2023.08</strong> [코-취] 구로청년이룸 '코-취'(우수 수료자)
          </p>
          <p>알고리즘 교육 과 기업과제 </p>
          <p>
            <strong>2023.08 ~ 2023.10</strong> 프리온보딩 백엔드 인턴쉽
          </p>
          <p></p>
          <p>
            <strong>2023.08 ~ 2023.10</strong> 공개SW 개발자대회 출품
          </p>
        </div>
      </div>

      
  
    </div>
  );
}

export default About;
