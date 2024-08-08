import getPlatform from './platform';
import fetch from './fetch';
import { snackbar, type TextField } from 'mdui';

export default (target: string) => {
  const platform = getPlatform();
  if(platform == ''){
    snackbar({
      message: '请输入文本',
      placement: 'top',
      onClosed: () => {
        (document.querySelector('#searchBox') as TextField).focus();
      },
    });
  }
  else{
    snackbar({
      message: '搜索中……',
      placement: 'top',
    });
    fetch(platform, target);
  }
};