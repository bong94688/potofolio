export const project8 = {
  name: 'core',
  pointcolor: 'before:bg-[#0b4da1]',
  title: '개인 포폴 프로젝트',
  subtext:
    'Bit O 프로젝트는 커플들의 관계를 더욱 풍부하고 의미 있게 만들기 위해 개발된 서비스입니다.',
  data: '2024.12 ~ ',
  team: '기여도 100%',
  tag: ['typescript','react','aws'],
  giturl: 'https://github.com/bong94688/potofolio',
  imgurl: 'http://localhost:3000/src/assets/images/portpolio/portfolio.webp',
  tools: [
    {
      title: 'Naver Cloud Platform',
      detail: 'NCP를 활용해 프론트엔드, 백엔드 서버의 환경을 구축하고 CI/CD 파이프라인을 설정하여 코드 배포 자동화 및 효율성을 향상시켰습니다.',
    },
    {
      title: 'JWT 로그인 기능',
      detail: 'JWT를 이용하여 보안성을 강화한 로그인 기능을 구현하고, Redis를 활용한 로그아웃 기능으로 보안을 더욱 강화했습니다.',
    },
    {
      title: 'Socket 통신',
      detail:
        'Socket 통신을 이용하여 실시간으로 예약 및 포장 예약 정보를 처리하고, 사용자에게 즉각적인 알림을 제공합니다.',
    },
  ],
  featinfo: [],
  parts: [
    {
      title: '실시간 위치 기반 서비스',
      detailList: [
        'GPS 좌표를 실시간으로 수집하여 사용자의 현재 위치를 기반으로 근처 랜드마크를 검색하고, 해당 위치 주변의 가게 정보를 제공',
      ],
    },
    {
      title: 'JWT 로그아웃 기능 개선',
      detailList: [
        '기존 로그아웃 처리 방식의 문제점을 해결하고, 서버에서 로그아웃 상태를 관리할 수 있도록 Redis를 활용한 로그아웃 처리 시스템을 구축',
      ],
    },
    {
      title: '보안 및 인증 기능 강화',
      detailList: [
        'Access Token과 Refresh Token 교체로 보안성을 강화하고, 악의적인 공격을 방지하기 위한 추가적인 인증 절차를 구현',
      ],
    },
  ],
};
