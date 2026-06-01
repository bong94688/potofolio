import { getImageUrl } from '../../../utils/assets';
export const project7 = {
  name: '그릿 테스트 프로젝트',
  pointcolor: 'before:bg-[#0b4da1]',
  title: '그릿 테스트 프로젝트',
  subtext:
    '그릿테스트는 개인이 기업 과제로 참여하는 코딩 해커톤입니다. 참가자는 제한된 시간 내에 독립적으로 실시간 웹 애플리케이션을 개발 합니다.',
  data: '2024.12 ~ ',
  team: '기여도 100%',
  tag: ['SpringBoot', 'React', 'NCP'],
  giturl: 'https://github.com/Gridge-Test/simbonggyo-66',
  imgurl: getImageUrl('gridgetest/gridgeicon.webp'),
  tools: [
    {
      title: 'SpringBoot',
      detail: 'SpringBoot를 사용하여 백엔드 API를 빠르게 개발합니다. 이 플랫폼을 통해 RESTful 서비스를 구현하여 애플리케이션의 백엔드 로직을 간결하게 처리합니다.'
    },
    {
      title: 'React',
      detail: 'React를 활용하여 동적인 사용자 인터페이스를 개발합니다. 컴포넌트 기반의 구조를 통해 유지보수가 용이하고 반응형 웹 페이지를 구현합니다.'
    },
    {
      title: 'NCP',
      detail: 'Naver Cloud Platform을 이용하여 서버, 데이터베이스, 스토리지 등의 클라우드 서비스를 활용, 프로젝트의 인프라를 강화하고 운영 효율성을 높입니다.'
    }
  ],
  featinfo: [],
  parts: [
    {
      title: '로그인 기능',
      detailList: [
        '안전한 사용자 인증을 위해 JWT 기반의 로그인 시스템을 구현합니다. 이 시스템은 사용자의 로그인 상태를 효과적으로 관리하고 보안을 유지합니다.'
      ],
    },
    {
      title: '인스타그램 팔로우 기능',
      detailList: [
        '사용자 간의 상호작용을 가능하게 하는 팔로우 기능을 개발합니다. 이 기능은 사회적 네트워크 형성에 중요한 역할을 하며, 사용자 경험을 향상시킵니다.'
      ],
    },
    {
      title: '인스타그램 게시판 기능',
      detailList: [
        '사용자가 사진과 정보를 공유할 수 있는 게시판 기능을 제공합니다. 이는 커뮤니티의 활성화를 돕고, 사용자 간의 소통을 촉진합니다.'
      ],
    },
  ],
};
