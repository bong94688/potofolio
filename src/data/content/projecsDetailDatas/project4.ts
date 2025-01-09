export const project4 = {
  name: 'BitO 프로젝트',
  pointcolor: 'before:bg-[#0b4da1]',
  title: '커플 프로젝트',
  subtext:
  'Bit O 프로젝트는 커플들의 관계를 더욱 풍부하고 의미 있게 만들기 위해 개발된 서비스입니다. 이 프로젝트는 기념일 관리, D-day 카운트다운, 그리고 맞춤 데이트 장소 추천 기능을 제공하여 커플들이 중요한 순간을 기억하고 새로운 추억을 만들 수 있도록 돕습니다.',
  data: '2024.09 - ',
  team: '기여도 50%',
  tag: ['SpringBoot','react','aws'],
  giturl: 'https://github.com/bit-o-gi/Bit-O-BE',
  imgurl: 'http://localhost:3000/src/assets/images/couple/coupleicon.webp',
  tools: [
    {
      title: 'SpringBoot',
      detail: '백엔드 서비스는 SpringBoot를 사용하여 개발되었습니다. 이를 통해 RESTful API와 GraphQL을 모두 제공하여, 커플들의 데이터 처리가 더 유연하고 효율적으로 이루어집니다. GraphQL은 데이터 요청을 최적화하여 필요한 정보만을 특정할 수 있게 해주며, RESTful API는 광범위한 호환성과 표준화된 데이터 접근을 제공합니다. 이 두 기술의 조합은 보안성을 강화하며, 사용자 맞춤형 경험을 제공 합니다..'
    },
    {
      title: 'React',
      detail: 'React를 사용하여 동적이고 반응형 웹 프론트엔드를 구현했습니다. 사용자 경험을 최적화하기 위해 모던 웹 기술을 적용하여 커플들이 쉽고 편리하게 서비스를 이용할 수 있도록 했습니다.'
    },
    {
      title: 'AWS',
      detail: 'AWS 클라우드 서비스를 활용하여 애플리케이션의 배포, 관리 및 확장성을 향상시켰습니다. 높은 가용성과 보안을 유지하면서도 비용 효율적인 인프라를 제공합니다.'
    },
  ],
  featinfo: [],
  parts: [
    {
      title: '기념일 및 D-day 기능',
      detailList: [
        '사용자가 중요한 날짜를 저장하고 D-day를 자동으로 계산하여 알림을 제공합니다. 이 기능을 통해 커플들은 특별한 날을 놓치지 않고 준비할 수 있습니다.'
      ],
    },
    {
      title: '데이트 장소 추천 기능',
      detailList: [
        '사용자의 위치와 선호도를 기반으로 최적의 데이트 장소를 추천합니다. 이 시스템은 다양한 데이터 소스와 사용자 피드백을 분석하여 개인화된 추천을 제공합니다.'
      ],
    },
    {
      title: '보안 및 인증 기능 강화',
      detailList: [
        'Access Token과 Refresh Token 교체로 보안성을 강화하고, 악의적인 공격을 방지하기 위한 추가적인 인증 절차를 구현합니다. 이는 사용자 데이터의 보호를 강화하고 서비스의 신뢰성을 높입니다.'
      ],
    },
  ],
};
