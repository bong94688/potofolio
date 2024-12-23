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
    <h2>CONTACT</h2>
    <div className="contact-list">
      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <a href="mailto:simbonggy@gmail.com">simbonggy@gmail.com</a>
      </div>
      <div className="contact-item">
        <i className="fab fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/%EB%B4%89%EA%B5%90-%EC%8B%AC-35979829a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
          LinkedIn Profile
        </a>
      </div>
      <div className="contact-item">
        <i className="fab fa-github"></i>
        <a href="https://github.com/bong94688" target="_blank" rel="noreferrer">GitHub Profile</a>
      </div>
      <div className="contact-item">
      <i className="fas fa-blog"></i>
      <a href="https://velog.io/@bong9468/posts" target="_blank" rel="noreferrer">Blog</a>
      </div>
    </div>
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
      <strong>안녕하세요.</strong> 저는 안정적인 시스템 설계와 확장을 중점적으로 고민하며 성장해 온 백엔드 개발자 심봉교입니다.
      효율적인 시스템 구축과 데이터 처리 최적화를 목표로 다양한 프로젝트를 진행하며 강점을 키워왔습니다.
    </p>
    <p>
    <strong> Spring Boot와 MySQL을 기반으로 설계 와 확장이 가능한 시스템 구현을 경험했습니다.</strong> 특히, 간단한 채팅 애플리케이션에서부터 
      대규모 서비스 부하 테스트를 최적화하며 성능 최적화와 문제 해결 능력을 개발했습니다. 또한, API 효율성을 높이고,
      <p></p><strong> JWT를 활용한 인증 및 권한 관리 를 통해 보안성과 확장성을 모두 만족시키는 작업에 기여한 경험이 있습니다.</strong>
    </p>
    <p>
      앞으로도 이러한 경험을 바탕으로 더욱 안정적이고 성능 높은 서비스를 운영 및 개발하며 성장을 지속해 나가고자 합니다.
    </p>
  </div>
</div>

<div className="about-content" data-aos="fade-right">
        <div className="info-content career-content">
          <h2><i className="fas fa-briefcase"></i> Career</h2>

          <div className="career-item">
            <div className="career-date">
              <p>2023.04 ~ 2023.11</p>
            </div>
            <div className="career-details">
              <h3>아이쇼핑</h3> 백엔드 팀장 (창업팀)
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
              <h3>아이페이지온</h3> EMS 팀 (백엔드 , 서버 개발)
              <p>
                백엔드 개발자로 활동하며 CI/CD 구축, API 설계 및 데이터 최적화 작업을 진행했습니다. 코드 품질 향상과 데이터 분석 기반의 서비스 개선에 기여하였습니다.
              </p>
              <ul>
                <li>MQTT 를 이용한 서버 통신 구현</li>
                <li>알티베이스를 이용한 DB 이중화 구현</li>
                <li>WebSocket 를 이용한 서버 자원 그래프 구현</li>
                <li>MSA 구조의 INT API 블럭 개발</li>
              </ul>
            </div>
          </div>
          <div className="career-item">
            <div className="career-date">
              <p>2024.12 ~ </p>
            </div>
            <div className="career-details">
              <h3>오프리메드</h3> 플랫폼 개발팀 (풀스택 개발 , 서버 개발)
              <p>
                임상 시험 데이터를 AI로 모델링 하여 임상 시험의 성공률를 높여주는 AIAS 를 하여 웹 프로젝트를 만들었습니다.
              </p>
              <ul>
                <li>테일윈드 UI 프레임워크 를 이용한 UI 구성</li>
                <li>React 를 이용한 웹 프론트 제작</li>
                <li>Node.js 를 이용한 백엔드 구성</li>
                <li>AWS 와 쿠버네티스를 이용한 서버 구성</li>
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

    <div className="activity-item">
      <h3>2023.04 ~ 2023.09</h3>
      <p><strong>네이버클라우드 교육과정 수료</strong></p>
      <p>
        NCP를 활용하여 클라우드 기반 웹 애플리케이션 개발을 진행했습니다. 
        교육 과정 중 클라우드 아키텍처 설계, 서버 배포 및 모니터링을 학습하였고, 팀 프로젝트를 통해 NCP 스토리지와 
        API Gateway를 연동해 실무 환경을 경험했습니다.
      </p>
      <ul>
        <li>주요 기술: NCP, Docker, Kubernetes</li>
        <li>성과: 팀 프로젝트 리더로 프로젝트의 CI/CD 파이프라인 설계 및 구축</li>
      </ul>
    </div>

    <div className="activity-item">
      <h3>2023.05 ~ 2023.06</h3>
      <p><strong>K-DigitalTraining 해커톤 대회</strong></p>
      <p>
        AI 모델 학습 데이터의 정확도를 개선하기 위해 데이터 전처리 및 하이퍼파라미터 튜닝을 수행했습니다. 
        구현 아키텍처의 효율성을 검토받으며, 서비스 배포 시 예상 문제점에 대한 피드백을 통해 시스템을 보완하였습니다.
      </p>
      <ul>
        <li>주요 기술: Spring, TensorFlow, Flask</li>
        <li>성과: 데이터 전처리 과정 최적화로 모델 학습 속도 30% 개선</li>
      </ul>
    </div>

    <div className="activity-item">
      <h3>2023.07 ~ 2023.08</h3>
      <p><strong>구로청년이룸 '코-취'(우수 수료자)</strong></p>
      <p>
        알고리즘 문제 해결 능력을 강화하기 위해 코딩 테스트와 스터디를 진행했습니다. 기업 과제에서는 
        Dynamic Programming과 Greedy Algorithm을 적용하여 최적의 솔루션을 도출하였습니다.
      </p>
      <ul>
        <li>주요 기술: Java, Python</li>
        <li>성과: 기업 과제에서 알고리즘 효율성을 개선하여 평가 점수 상위 5% 달성</li>
      </ul>
    </div>

    <div className="activity-item">
      <h3>2023.08 ~ 2023.10</h3>
      <p><strong>프리온보딩 백엔드 인턴십</strong></p>
      <p>
        대규모 트래픽 환경에서의 API 설계 및 성능 최적화를 진행했습니다. 가상 트래픽 부하 테스트를 통해 
        병목 지점을 파악하고, 효율적인 알고리즘으로 시간 복잡도와 공간 복잡도를 개선했습니다.
      </p>
      <ul>
        <li>주요 기술: Spring Boot, MySQL, Redis</li>
        <li>성과: 트래픽 처리 속도 40% 향상, 메모리 사용량 25% 절감</li>
      </ul>
    </div>

    <div className="activity-item">
      <h3>2023.08 ~ 2023.10</h3>
      <p><strong>공개SW 개발자대회</strong></p>
      <p>
        소상공인을 위한 '맛자취' 프로젝트를 기획 및 개발하여 공개SW 개발자대회에 출품하였습니다. 
        사용자 맞춤형 추천 시스템과 실시간 위치 기반 서비스를 설계하고, 이를 바탕으로 상용화 가능성을 평가받았습니다.
      </p>
      <ul>
        <li>주요 기술: Spring , Node.js, MongoDB, AWS</li>
        <li>성과: 대회에서 창의성과 기술 구현력을 인정받아 우수 프로젝트 선정</li>
      </ul>
    </div>

    <div className="activity-item">
      <h3>2024.08 ~ 현재</h3>
      <p><strong>BITO 스터디</strong></p>
      <p>
        Spring Boot와 GraphQL을 활용한 Couple 앱 사이드 프로젝트를 진행 중입니다. 테스트 커버리지 확대를 통해 
        코드 품질을 개선하였으며, GraphQL로 REST API의 단점을 보완해 효율적인 데이터 요청을 구현했습니다.
      </p>
      <ul>
        <li>주요 기술: Spring Boot, GraphQL, JUnit</li>
        <li>성과: 테스트 코드 커버리지를 70%로 확장, 코드 리뷰를 통해 팀의 코드 스타일 통일</li>
      </ul>
    </div>
  </div>
</div>


      
  
    </div>
  );
}

export default About;
