import { project1 } from './projecsDetailDatas/project1';
import { project2 } from './projecsDetailDatas/project2';
import { project4 } from './projecsDetailDatas/project4';
import { project13 } from './projecsDetailDatas/project13';

export const projectData = [
  {
    name: project1.name,
    type: 'team',
    title: project1.title,
    subject: '아이쇼핑은 시각장애인을 위한 맞춤형 오프라인 쇼핑 지원 서비스입니다.',
    imgurl: project1.imgurl,
    giturl: project1.giturl,
    tag: project1.tag,
  },
  {
    name: project4.name,
    type: 'team',
    title: project4.title,
    subject: '커플들을 위해 특별히 제작된 Bit O 프로젝트는 관계를 강화하고, 중요한 순간들을 기념 할수있는 서비스입니다.',
    tag: project4.tag,
    imgurl: project4.imgurl,
    giturl: project4.giturl,
  },
  {
    name: project2.name,
    type: 'team',
    title: project2.title,
    subject: '맛자취는 소상공인들의 비즈니스 운영 효율성을 높이기 위해 만들어진 서비스입니다.',
    imgurl: project2.imgurl,
    giturl: project2.giturl,
    tag: project2.tag,
  },
  {
    name: project13.name,
    type: 'team',
    title: project13.title,
    subject: '현재 개발 중인 헬스 트래킹 앱입니다. (Bit-O Study 팀 프로젝트)',
    tag: project13.tag,
    giturl: project13.giturl,
  },
];
