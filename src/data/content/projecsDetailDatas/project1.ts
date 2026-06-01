import { getImageUrl } from '../../../utils/assets';
export const project1 = {
  name: 'goguma',
  pointcolor: 'before:bg-[#7c29a7]',
  title: '아이쇼핑 프로젝트',
  subtext:
    '시각장애인을 위한 맞춤형 오프라인 쇼핑 지원 서비스로, 국민행복 서비스 발굴 창업경진대회(대상)와 법정부 창업경진대회 왕중왕전(국무총리상)을 수상한 프로젝트입니다. 사용자 편의성을 극대화하고, 효율적인 데이터 처리를 통해 혁신적인 서비스를 구현하였습니다.',
  data: '2023.05 - 2023.11 약 6개월',
  team: '기여도 50%',
  tag: ['SpringBoot', 'React','Flask','ncp','AI'],
  giturl: 'https://github.com/eye-I-shopping/eye-I-Shopping',
  imgurl: getImageUrl('eyes(I)shopping/eye(I)shoppingicon.webp'),
  detailimginfo: [
    {
      imgurl:
        getImageUrl('eyes(I)shopping/architecture.webp'),
      subject: '시스템 아키텍처',
    },
    {
      imgurl:
        getImageUrl('eyes(I)shopping/service1.webp'),
      subject: '설정 화면',
    },
    {
      imgurl:
        getImageUrl('eyes(I)shopping/service2.webp'),
      subject: '상품 인식 화면',
    },
    {
      imgurl:
        getImageUrl('eyes(I)shopping/accuracy.webp'),
      subject: '프로젝트 리스트 화면',
    },
    {
      imgurl:
        getImageUrl('eyes(I)shopping/seach.webp'),
      subject: '시장 조사',
    },
    {
      imgurl:
        getImageUrl('eyes(I)shopping/setting.webp'),
      subject: '편리한 설정 창',
    },
  ],
  tools: [
    {
      title: 'Spring Boot',
      detail: 
        '사용자 인증 및 접근 제어가 필요한 프로젝트에서 Spring Security를 활용하여 보안 요구사항을 충족시키기 위해 사용. RESTful API 설계 및 구현을 통해 데이터 전송의 효율성을 극대화하고, 확장성과 유지보수성을 보장하기 위해 채택.',
    },
    {
      title: 'React',
      detail: 
        '인터랙티브한 사용자 경험과 동적인 웹 애플리케이션 개발을 위해 React를 선택. GPT 다빈치 모델과 연계하여 자연어 처리(NLP) 기반의 사용자 요청 처리 기능을 구현하고, 맞춤형 문장 생성 및 데이터 제공을 실시간으로 제공.',
    },
    {
      title: 'Flask',
      detail: 
        '경량 프레임워크의 장점을 활용하여 YOLOv5 모델을 서비스화하기 위해 Flask를 사용. 모델의 예측 결과를 빠르게 처리하고 제공하는 API를 개발하여 사용자와의 인터페이스를 간소화.',
    },
    {
      title: 'Naver Cloud Platform (NCP)',
      detail: 
        '클라우드 환경에서의 AI, 프론트엔드, 백엔드 서버 통합 설계와 구축을 위해 NCP를 선택. 안정적이고 확장 가능한 인프라를 제공하여 서비스의 성능과 안정성을 높이고, 운영 비용을 효율적으로 관리.',
    },
    {
      title: 'AI',
      detail: 
        'YOLOv5 모델을 활용하여 텍스트와 사진 간의 관계를 효과적으로 분석 및 처리하기 위해 사용. 이미지 기반 데이터를 텍스트로 변환하거나 텍스트를 기반으로 이미지를 처리하는 기능을 구현하여 데이터 간의 상호 연관성을 강화.',
    }
  ],
  featinfo: [
    '사용자 인증 및 접근 제어 기능',
    '맞춤형 데이터 제공을 위한 자연어 처리(NLP)',
    '2진 데이터 변환 및 효율적 데이터 관리',
    '매대 인식 및 상품 추천 기능 개발',
  ],
  parts: [
    {
      title: '사용자 인증 및 접근 제어',
      detailList: [
        'Spring Security를 기반으로 핸드폰 고유 식별 번호(Device ID)를 활용한 인증 및 접근 제어 구현.',
        '사용자 설정 데이터를 2진법으로 변환하여 데이터베이스에 효율적으로 저장.',
      ],
    },
    {
      title: '자연어 처리 기반 데이터 제공',
      detailList: [
        'GPT 다빈치 모델을 활용하여 사용자 요청에 따라 적합한 데이터를 자연스러운 문장 형태로 생성.',
        '문법적으로 올바르고 읽기 쉬운 문장 생성을 통해 사용자 경험(UX) 향상.',
      ],
    },
    {
      title: '매대 인식 및 상품 추천',
      detailList: [
        'AI 모델을 활용하여 매대별 상품 데이터를 분석 및 분류.',
        '카테고리 빈도 분석을 통해 최적의 상품 매칭 결과를 도출.',
        '사용자 위치를 기준으로 방향을 계산하여 매대를 안내하는 기능 구현.',
      ],
    },
    {
      title: '프로젝트 품질 향상을 위한 QA',
      detailList: [
        'QA를 통해 기능 작동 여부와 화면 표시 상태를 검증, 발견된 개선 사항 문서화.',
        '프론트엔드 개발자와 협업하여 품질을 지속적으로 개선.',
      ],
    },
  ],
};
