import IconAvatar from '../../../assets/icons/sidebar/avatar.svg';
import IconMain from '../../../assets/icons/sidebar/main.svg';
import IconMainWhite from '../../../assets/icons/sidebar/main_white.svg';
import IconPipelines from '../../../assets/icons/sidebar/pipelines.svg';
import IconPipelinesWhite from '../../../assets/icons/sidebar/pipelines_white.svg';
import IconRepeat from '../../../assets/icons/sidebar/repeat.svg';
import IconRepeatWhite from '../../../assets/icons/sidebar/repeat_white.svg';

export const sidebarData = [
  { id: 0, text: 'username', img: IconAvatar, imgWhite: IconAvatar, link: '/profile' },
  { id: 1, text: 'главная', img: IconMain, imgWhite: IconMainWhite, link: '/' },
  { id: 2, text: 'пайплайны', img: IconPipelines, imgWhite: IconPipelinesWhite, link: '/watch' },
  { id: 3, text: 'повторение', img: IconRepeat, imgWhite: IconRepeatWhite, link: '/repeat' },
];
