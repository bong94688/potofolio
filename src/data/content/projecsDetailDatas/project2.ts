export const project2 = {
  name: '맛자취',
  pointcolor: 'before:bg-[#0b4da1]',
  title: '맛자취 프로젝트',
  subtext:
    '사회적 가치를 실현하고 소상공인의 경쟁력을 강화하기 위해 개발된 플랫폼입니다. 온라인과 오프라인 환경의 융합을 통해 소상공인의 편리한 판매를 돕고 사용자 경험을 최적화합니다.',
  data: '2023.11 - 2024.02',
  team: '기여도 70%',
  tag: ['SpringBoot', 'React', 'ncp'],
  giturl: 'https://github.com/bitcampprettytiger/mukjachi',
  imgurl: 'https://simbonggyo.duckdns.org/src/assets/images/mukjachi/mukjachiicon.webp',
  tools: [
    {
      title: 'SpringBoot',
      detail: 'JWT를 이용하여 사용자 인증 기능을 구현하고, Access Token과 Refresh Token을 활용한 보안 강화를 통해 안전한 인증 절차를 구축했습니다. Redis를 활용하여 로그아웃 시 Access Token을 블랙리스트에 등록하고, 이를 통해 만료되지 않은 토큰의 악용을 방지하여 보안을 더욱 강화했습니다.',
    },
    {
      title: 'React',
      detail:
        'Socket.io를 활용하여 실시간 데이터 통신을 구현하였으며, 이를 통해 예약 및 포장 예약 상태를 실시간으로 확인할 수 있는 기능을 제공했습니다. 사용자에게 알림이 즉시 전달되도록 설계하여 예약 과정의 사용자 경험을 크게 향상시켰습니다.',
    },
    {
      title: 'Naver Cloud Platform',
      detail: 'NCP를 활용해 프론트엔드, 백엔드 서버의 인프라를 구축하고, CI/CD 파이프라인을 설정하여 자동화된 배포 프로세스를 구현하였습니다. 이를 통해 배포 속도를 단축하고 코드 변경 사항을 효율적으로 관리하여 운영 효율성을 높였습니다.',
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
